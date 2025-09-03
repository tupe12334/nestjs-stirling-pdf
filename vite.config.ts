import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      exclude: ['**/*.spec.ts', '**/*.test.ts', 'src/generated/**/*']
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'NestJSStirlingPdf',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`
    },
    rollupOptions: {
      external: [
        '@nestjs/common',
        '@nestjs/core',
        'axios',
        'reflect-metadata',
        'rxjs'
      ],
      output: {
        globals: {
          '@nestjs/common': 'NestJSCommon',
          '@nestjs/core': 'NestJSCore',
          'axios': 'axios',
          'reflect-metadata': 'Reflect',
          'rxjs': 'rxjs'
        }
      }
    },
    sourcemap: true,
    minify: false,
    target: 'es2022'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})