export interface StirlingPdfModuleOptions {
  baseURL: string;
  apiKey?: string;
  timeout?: number;
}

export interface StirlingPdfModuleAsyncOptions {
  imports?: any[];
  useFactory?: (...args: any[]) => Promise<StirlingPdfModuleOptions> | StirlingPdfModuleOptions;
  inject?: any[];
}