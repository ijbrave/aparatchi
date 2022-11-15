import 'dotenv/config'
import 'colorts/lib/string'
import express from 'express'
import cors from 'cors'
import movie from '~/routes/movie.route'
import user from '~/routes/user.route'
import comment from '~/routes/comment.route'
import { errorHandler } from '~/middleware'

const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())

app.use('/api/movie', movie)
app.use('/api/user', user)
app.use('/api/comment', comment)

app.use(errorHandler)

app.listen(PORT, () => {
	console.log(`🚀 Server is running at http://localhost:${PORT}`.cyan)
})
