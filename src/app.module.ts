import { Module } from "@nestjs/common";
import { CrudzoneModule } from "./modules/crudzone/crudzone.module";

@Module({
  imports: [
    CrudzoneModule,
  ],
  providers: [],
})
export class AppModule {}
