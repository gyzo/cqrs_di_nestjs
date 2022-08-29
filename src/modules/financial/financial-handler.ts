import { FinancialCommand } from "./financial-command";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { FinancialRepo } from "./financial.repo";

@CommandHandler(FinancialCommand)
export class FinancialHandler implements ICommandHandler<FinancialCommand> {
  constructor(private readonly repo: FinancialRepo) {
  }

  async execute(command: FinancialCommand): Promise<string> {
    return this.repo.getData();
  }

}