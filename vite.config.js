import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import Vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		{
			configResolved(config) {
				const idx_vue = config.plugins.findIndex(
					(plugin) => plugin.name && plugin.name === 'vite:vue'
				)
				config.plugins.splice(idx_vue + 1, 0, Vuetify()[0])
			}
		}
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
