# NestJS Stirling PDF Integration Module

A NestJS module for seamless integration with Stirling PDF instances, providing a simple and type-safe way to communicate with Stirling PDF services.

## Overview

This module provides a NestJS wrapper with an auto-generated SDK from the official Stirling PDF OpenAPI specification, allowing you to easily integrate PDF processing capabilities into your NestJS applications. The SDK is generated using OpenAPI Generator CLI with Axios as the HTTP client, ensuring type-safe communication with Stirling PDF instances.

## Features

- 🚀 Easy NestJS integration
- ⚙️ Configurable Stirling PDF instance URL
- 📝 TypeScript support
- 🔧 Auto-generated SDK from Stirling PDF OpenAPI specification
- 📡 Axios-based HTTP client for reliable communication
- 🎯 Clean, injectable service architecture

## Installation

```bash
pnpm add nestjs-stirling-pdf
```

## Quick Start

### 1. Import the Module

```typescript
import { Module } from '@nestjs/common';
import { StirlingPdfModule } from 'nestjs-stirling-pdf';

@Module({
  imports: [
    StirlingPdfModule.register({
      url: 'http://localhost:8080', // Your Stirling PDF instance URL
    }),
  ],
})
export class AppModule {}
```

### 2. Inject and Use the Service

```typescript
import { Injectable } from '@nestjs/common';
import { StirlingPdfService } from 'nestjs-stirling-pdf';

@Injectable()
export class PdfProcessorService {
  constructor(private readonly stirlingPdfService: StirlingPdfService) {}

  async processPdf(file: Buffer) {
    return await this.stirlingPdfService.convertToPdf(file);
  }
}
```

## Configuration

### Synchronous Configuration

```typescript
StirlingPdfModule.register({
  url: 'http://your-stirling-pdf-instance:8080',
  // Additional configuration options
})
```

### Asynchronous Configuration

```typescript
StirlingPdfModule.registerAsync({
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    url: configService.get<string>('STIRLING_PDF_URL'),
  }),
  inject: [ConfigService],
})
```

## Environment Variables

```env
STIRLING_PDF_URL=http://localhost:8080
```

## API Reference

### StirlingPdfService

The main service for interacting with your Stirling PDF instance.

```typescript
class StirlingPdfService {
  // PDF conversion methods
  convertToPdf(file: Buffer): Promise<Buffer>;
  
  // Additional methods will be documented as they are implemented
}
```

## Requirements

- Node.js >= 16
- NestJS >= 8.0
- A running Stirling PDF instance

## Development

### Environment Setup

Copy the example environment file and configure your tokens:

```bash
cp .env.example .env
```

Edit `.env` and add your tokens:
- `NPM_TOKEN`: Required for publishing to NPM
- `GITHUB_TOKEN`: Required for creating GitHub releases

### Release Process

The project uses `release-it` for automated releases:

```bash
pnpm run release
```

This will:
1. Load environment variables from `.env` if it exists
2. Run tests and linting
3. Bump version and update changelog
4. Build the project
5. Create git tag and GitHub release
6. Publish to NPM

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on how to get started.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please see our [Support Guide](SUPPORT.md) for the best ways to get help.

## SDK Generation

This module uses an auto-generated SDK from the official Stirling PDF OpenAPI specification:

```bash
# Generate SDK from OpenAPI specification
pnpm dlx @openapitools/openapi-generator-cli generate \
  -i https://api.swaggerhub.com/apis/Frooodle/Stirling-PDF/0.45.0 \
  -g typescript-axios \
  -o ./src/generated
```

The generated SDK provides:
- Full TypeScript support with auto-generated types
- Axios-based HTTP client
- Complete API coverage matching Stirling PDF v0.45.0

## Related Projects

- [Stirling PDF](https://github.com/Frooodle/Stirling-PDF) - The core Stirling PDF application
- [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator) - Code generation tool
- [NestJS](https://nestjs.com/) - The progressive Node.js framework