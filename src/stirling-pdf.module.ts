import { Module, DynamicModule, Provider } from '@nestjs/common';
import { StirlingPdfService } from './stirling-pdf.service';
import { 
  StirlingPdfModuleOptions, 
  StirlingPdfModuleAsyncOptions 
} from './interfaces/stirling-pdf-config.interface';
import { STIRLING_PDF_MODULE_OPTIONS } from './constants';

@Module({})
export class StirlingPdfModule {
  static register(options: StirlingPdfModuleOptions): DynamicModule {
    return {
      module: StirlingPdfModule,
      providers: [
        {
          provide: STIRLING_PDF_MODULE_OPTIONS,
          useValue: options,
        },
        StirlingPdfService,
      ],
      exports: [StirlingPdfService],
    };
  }

  static registerAsync(options: StirlingPdfModuleAsyncOptions): DynamicModule {
    const providers: Provider[] = [
      {
        provide: STIRLING_PDF_MODULE_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      },
      StirlingPdfService,
    ];

    return {
      module: StirlingPdfModule,
      imports: options.imports || [],
      providers,
      exports: [StirlingPdfService],
    };
  }
}