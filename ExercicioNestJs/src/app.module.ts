import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entity';
import { Tarefa } from './tarefa/entities/tarefa.entity';
import { TarefaModule } from './tarefa/modules/tarefa.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '55199718',
      database: 'db_todo',
      entities: [Tarefa, Categoria],
      synchronize: true
    }),
    TarefaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
