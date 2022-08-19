import express from "express"
import helmet from "helmet"
import hpp from "hpp"
import cors from "cors"
import rateLimit from "express-rate-limit"

const app = express()

app.use(express.json())
app.use(helmet())
app.use(hpp())
app.use(cors())

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Demasiadas peticiones desde esta IP.'
})

app.use('/api/v1/', limiter)

export default app
