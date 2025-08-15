import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change REPO_NAME to your repository name
export default defineConfig({
  plugins: [react()],
  base: '/weather-app/'
})
