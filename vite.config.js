import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/bimcapacitacion-react/',
  base:'https://cursos.bimcapacitacion.com/',
  plugins: [react()]
})
