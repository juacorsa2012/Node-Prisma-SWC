import * as yup from "yup"

const usuarioSchema = yup.object({
  name: yup.string()
    .required()
    .max(50),

  password: yup.string()
    .required()
    .min(4)
    .max(255),

  email: yup.string()
    .required()
    .email()  
})

export default usuarioSchema