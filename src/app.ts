import { defineApp } from 'iles'
import vuetify from '@/plugins/vuetify.js'

export default defineApp({
	enhanceApp({ app, head, router }) {
		app.use(vuetify)
	}
})
