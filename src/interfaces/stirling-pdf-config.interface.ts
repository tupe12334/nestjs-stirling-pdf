export interface StirlingPdfModuleOptions {
  baseURL: string;
  apiKey?: string;
  timeout?: number;
}

import type { DynamicModule, Type, ForwardReference, InjectionToken, OptionalFactoryDependency } from '@nestjs/common';

export interface StirlingPdfModuleAsyncOptions {
  imports?: Array<Type<unknown> | DynamicModule | Promise<DynamicModule> | ForwardReference>;
  useFactory?: (...args: unknown[]) => Promise<StirlingPdfModuleOptions> | StirlingPdfModuleOptions;
  inject?: Array<InjectionToken | OptionalFactoryDependency>;
}