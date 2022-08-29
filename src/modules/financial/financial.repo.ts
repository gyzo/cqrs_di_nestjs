import { Injectable } from "@nestjs/common";

@Injectable()
export abstract class FinancialRepo {
  abstract getData(): string;
}