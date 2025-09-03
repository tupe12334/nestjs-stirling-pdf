# Contributing

We welcome contributions to the NestJS Stirling PDF Integration Module! This document provides guidelines for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `pnpm install`
4. Create a new branch for your feature or bug fix

## Development Setup

### Prerequisites

- Node.js >= 16
- pnpm (recommended package manager)
- A running Stirling PDF instance for testing

### Installation

```bash
# Clone your fork
git clone https://github.com/your-username/nestjs-stirling-pdf.git
cd nestjs-stirling-pdf

# Install dependencies
pnpm install
```

### Generating the SDK

The project uses an auto-generated SDK from the Stirling PDF OpenAPI specification:

```bash
# Generate SDK from OpenAPI specification
pnpm dlx @openapitools/openapi-generator-cli generate \
  -i https://api.swaggerhub.com/apis/Frooodle/Stirling-PDF/0.45.0 \
  -g typescript-axios \
  -o ./src/generated
```

## Making Changes

1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Add tests if applicable
4. Ensure all tests pass: `pnpm test`
5. Run linting: `pnpm lint`
6. Commit your changes with a descriptive message
7. Push to your fork: `git push origin feature/your-feature-name`
8. Open a Pull Request

## Pull Request Guidelines

- Provide a clear description of the changes
- Reference any related issues
- Ensure all tests pass
- Follow the existing code style
- Update documentation if needed

## Code Style

- Follow TypeScript best practices
- Use meaningful variable and function names
- Write clear, concise comments when necessary
- Maintain consistency with existing code

## Testing

Before submitting a pull request, make sure:

- All existing tests pass
- New features include appropriate tests
- Code coverage is maintained

## Reporting Issues

If you find a bug or have a feature request, please:

1. Check if the issue already exists
2. Create a new issue with a clear description
3. Include steps to reproduce (for bugs)
4. Provide example code if applicable

## Questions?

If you have questions about contributing, feel free to:

- Open an issue for discussion
- Join our community discussions

Thank you for contributing!