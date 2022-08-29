import { DynamicModule, Module, Provider } from "@nestjs/common";
import { ContextClientProvider } from "./context-client-provider";
import { FakeRepo } from "../infrastructure/fake.repo";
import { FinancialRepo } from "../financial/financial.repo";
import { FinancialHandler } from "../financial/financial-handler";

const sharedProviders = [
  {
    provide: FinancialRepo,
    useClass: FakeRepo
  },
  ContextClientProvider,
  FinancialHandler
]

@Module({
})
export class SharedModule {
  static forRoot(overrideProviders: Provider<any>[] = []): DynamicModule {
    const finalProviders = [...sharedProviders, ...overrideProviders];
    return {
      providers: finalProviders,
      exports: [...finalProviders],
      module: SharedModule
    };
  }
}
