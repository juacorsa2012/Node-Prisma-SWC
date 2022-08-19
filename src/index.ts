import { logger } from "./config/logger"
import app from "./app"

const port = Number(process.env.PORT ?? 3000)

app.listen(port, '0.0.0.0', () => {  
  logger.info(`Server started at http://localhost:${port}`)
})