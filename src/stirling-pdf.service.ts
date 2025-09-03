import { Injectable, Inject } from '@nestjs/common';
import { 
  AnalysisApi, 
  ConvertApi, 
  DatabaseApi, 
  FilterApi, 
  GeneralApi, 
  InfoApi, 
  MiscApi, 
  PipelineApi, 
  SecurityApi, 
  Configuration 
} from './generated';
import type { StirlingPdfModuleOptions } from './interfaces/stirling-pdf-config.interface';
import { STIRLING_PDF_MODULE_OPTIONS } from './constants';

@Injectable()
export class StirlingPdfService {
  public readonly analysisApi: AnalysisApi;
  public readonly convertApi: ConvertApi;
  public readonly databaseApi: DatabaseApi;
  public readonly filterApi: FilterApi;
  public readonly generalApi: GeneralApi;
  public readonly infoApi: InfoApi;
  public readonly miscApi: MiscApi;
  public readonly pipelineApi: PipelineApi;
  public readonly securityApi: SecurityApi;

  constructor(
    @Inject(STIRLING_PDF_MODULE_OPTIONS)
    options: StirlingPdfModuleOptions
  ) {
    const configuration = new Configuration({
      basePath: options.baseURL,
      apiKey: options.apiKey,
    });

    this.analysisApi = new AnalysisApi(configuration);
    this.convertApi = new ConvertApi(configuration);
    this.databaseApi = new DatabaseApi(configuration);
    this.filterApi = new FilterApi(configuration);
    this.generalApi = new GeneralApi(configuration);
    this.infoApi = new InfoApi(configuration);
    this.miscApi = new MiscApi(configuration);
    this.pipelineApi = new PipelineApi(configuration);
    this.securityApi = new SecurityApi(configuration);
  }
}