import dotenv from 'dotenv'

dotenv.config()

export default {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    extension: 'ts',
  },
}

// npx prisma generate
// npx knex migrate:make add-password-usuarios
// npx knex migrate:rollback --all