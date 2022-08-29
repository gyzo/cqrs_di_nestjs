import { FinancialRepo } from "../financial/financial.repo";
import { ContextClientProvider } from "../shared/context-client-provider";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FakeRepo extends FinancialRepo {

  constructor(private readonly contextClientProvider: ContextClientProvider) {
    super();
  }

  getData(): string {
    console.log('ccp', this.contextClientProvider);
    return this.contextClientProvider.getClientId();
  }
}