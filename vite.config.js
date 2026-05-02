import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Esto le dice a Vite que todos los archivos están dentro de la subcarpeta del repo
  base: '/Organizaciones-tarea/', 
})