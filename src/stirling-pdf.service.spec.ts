import { Test, TestingModule } from '@nestjs/testing';
import { StirlingPdfService } from './stirling-pdf.service';
import { STIRLING_PDF_MODULE_OPTIONS } from './constants';
import type { StirlingPdfModuleOptions } from './interfaces/stirling-pdf-config.interface';

describe('StirlingPdfService', () => {
  let service: StirlingPdfService;
  const mockOptions: StirlingPdfModuleOptions = {
    baseURL: 'http://localhost:8080',
    apiKey: 'test-api-key',
    timeout: 5000,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StirlingPdfService,
        {
          provide: STIRLING_PDF_MODULE_OPTIONS,
          useValue: mockOptions,
        },
      ],
    }).compile();

    service = module.get<StirlingPdfService>(StirlingPdfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should initialize all API clients', () => {
    expect(service.analysisApi).toBeDefined();
    expect(service.convertApi).toBeDefined();
    expect(service.databaseApi).toBeDefined();
    expect(service.filterApi).toBeDefined();
    expect(service.generalApi).toBeDefined();
    expect(service.infoApi).toBeDefined();
    expect(service.miscApi).toBeDefined();
    expect(service.pipelineApi).toBeDefined();
    expect(service.securityApi).toBeDefined();
  });

  it('should configure API clients with provided options', () => {
    expect((service.analysisApi as any).configuration?.basePath).toBe(mockOptions.baseURL);
    expect((service.convertApi as any).configuration?.apiKey).toBe(mockOptions.apiKey);
  });
});