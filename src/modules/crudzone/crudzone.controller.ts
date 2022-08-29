import { Controller, Get } from "@nestjs/common";
import { ContextClientProvider } from "../shared/context-client-provider";
import { CommandBus } from "@nestjs/cqrs";
import { FinancialCommand } from "../financial/financial-command";

@Controller('crudzone')
export class CrudzoneController {
  constructor(private readonly clientProvider: ContextClientProvider, private readonly commandBus: CommandBus) {}

  @Get()
  getHello(): Promise<any> {
    this.clientProvider.setClientId('a');
    return this.commandBus.execute(new FinancialCommand())
  }
}
