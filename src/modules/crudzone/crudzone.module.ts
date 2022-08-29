import { Module } from "@nestjs/common";
import { SharedModule } from "../shared/shared.module";
import { CqrsModule } from '@nestjs/cqrs';
import { CrudzoneController } from "./crudzone.controller";

@Module({
  imports: [
    CqrsModule,
    SharedModule.forRoot()
  ],
  controllers: [CrudzoneController],
  providers: [],
})
export class CrudzoneModule {}
