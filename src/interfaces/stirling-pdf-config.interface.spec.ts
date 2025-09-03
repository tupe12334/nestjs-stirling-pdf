import type { StirlingPdfModuleOptions, StirlingPdfModuleAsyncOptions } from './stirling-pdf-config.interface';

describe('StirlingPdfModuleOptions', () => {
  it('should define required baseURL property', () => {
    const options: StirlingPdfModuleOptions = {
      baseURL: 'http://localhost:8080',
    };
    
    expect(options.baseURL).toBe('http://localhost:8080');
  });

  it('should allow optional apiKey and timeout properties', () => {
    const options: StirlingPdfModuleOptions = {
      baseURL: 'http://localhost:8080',
      apiKey: 'test-key',
      timeout: 5000,
    };
    
    expect(options.apiKey).toBe('test-key');
    expect(options.timeout).toBe(5000);
  });
});

describe('StirlingPdfModuleAsyncOptions', () => {
  it('should allow useFactory configuration', () => {
    const options: StirlingPdfModuleAsyncOptions = {
      useFactory: () => ({
        baseURL: 'http://localhost:8080',
      }),
    };
    
    expect(options.useFactory).toBeDefined();
    expect(typeof options.useFactory).toBe('function');
  });

  it('should allow imports and inject configuration', () => {
    const options: StirlingPdfModuleAsyncOptions = {
      imports: [],
      inject: [],
      useFactory: () => ({
        baseURL: 'http://localhost:8080',
      }),
    };
    
    expect(options.imports).toBeDefined();
    expect(options.inject).toBeDefined();
    expect(Array.isArray(options.imports)).toBe(true);
    expect(Array.isArray(options.inject)).toBe(true);
  });
});