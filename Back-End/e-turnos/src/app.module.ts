/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
TypeOrmModule.forRoot({
  type:"mysql",
  host: "127.0.0.1",
  username: "root",
  password: "",
  database: "e_turnos",
  // autoLoadEntities carga automaticamente todas entidades que esten en el proyecto
  port: 3306, autoLoadEntities: true, synchronize: true
}),


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
