const status = require("http-status")
const { ERROR } = require("../config/constant")

const validation = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body)
    next()
  } catch (error) {      
      const errorMessage = error.errors[0]
      return res.status(status.BAD_REQUEST).json({
        status: ERROR,
        message: errorMessage
      })
  }
}

export default validation