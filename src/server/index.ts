import { Hono } from 'hono'
const app = new Hono()

app.get('/api/health', (c) => c.json('Offline'))

export default app