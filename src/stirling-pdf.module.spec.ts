import { Test, TestingModule } from '@nestjs/testing';
import { StirlingPdfModule } from './stirling-pdf.module';
import { StirlingPdfService } from './stirling-pdf.service';
import type { StirlingPdfModuleOptions } from './interfaces/stirling-pdf-config.interface';

describe('StirlingPdfModule', () => {
  const mockOptions: StirlingPdfModuleOptions = {
    baseURL: 'http://localhost:8080',
    apiKey: 'test-api-key',
  };

  describe('register', () => {
    let module: TestingModule;

    beforeEach(async () => {
      module = await Test.createTestingModule({
        imports: [StirlingPdfModule.register(mockOptions)],
      }).compile();
    });

    it('should provide StirlingPdfService', () => {
      const service = module.get<StirlingPdfService>(StirlingPdfService);
      expect(service).toBeDefined();
    });

    it('should configure service with provided options', () => {
      const service = module.get<StirlingPdfService>(StirlingPdfService);
      expect((service.analysisApi as any).configuration?.basePath).toBe(mockOptions.baseURL);
      expect((service.convertApi as any).configuration?.apiKey).toBe(mockOptions.apiKey);
    });
  });

  describe('registerAsync', () => {
    let module: TestingModule;

    beforeEach(async () => {
      module = await Test.createTestingModule({
        imports: [
          StirlingPdfModule.registerAsync({
            useFactory: () => mockOptions,
          }),
        ],
      }).compile();
    });

    it('should provide StirlingPdfService with async configuration', () => {
      const service = module.get<StirlingPdfService>(StirlingPdfService);
      expect(service).toBeDefined();
    });

    it('should configure service with factory-provided options', () => {
      const service = module.get<StirlingPdfService>(StirlingPdfService);
      expect((service.analysisApi as any).configuration?.basePath).toBe(mockOptions.baseURL);
      expect((service.convertApi as any).configuration?.apiKey).toBe(mockOptions.apiKey);
    });
  });

  describe('registerAsync with imports and inject', () => {
    const mockConfigService = {
      get: jest.fn().mockImplementation((key: string) => {
        const config: Record<string, string> = {
          'stirling.baseURL': 'http://test:8080',
          'stirling.apiKey': 'injected-key',
        };
        return config[key];
      }),
    };

    let module: TestingModule;

    beforeEach(async () => {
      module = await Test.createTestingModule({
        imports: [
          StirlingPdfModule.registerAsync({
            imports: [
              {
                module: class MockConfigModule {},
                providers: [
                  {
                    provide: 'CONFIG_SERVICE',
                    useValue: mockConfigService,
                  },
                ],
                exports: ['CONFIG_SERVICE'],
              },
            ],
            useFactory: (configService: any) => ({
              baseURL: configService.get('stirling.baseURL'),
              apiKey: configService.get('stirling.apiKey'),
            }),
            inject: ['CONFIG_SERVICE'],
          }),
        ],
      }).compile();
    });

    it('should provide StirlingPdfService with injected dependencies', () => {
      const service = module.get<StirlingPdfService>(StirlingPdfService);
      expect(service).toBeDefined();
    });

    it('should configure service with injected options', () => {
      const service = module.get<StirlingPdfService>(StirlingPdfService);
      expect((service.analysisApi as any).configuration?.basePath).toBe('http://test:8080');
      expect((service.convertApi as any).configuration?.apiKey).toBe('injected-key');
    });
  });
});