import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AccountModule } from './account/account.module';
import { TransferModule } from './transfer/transfer.module';
import { AlertModule } from './alert/alert.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    AccountModule,
    TransferModule,
    AlertModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
