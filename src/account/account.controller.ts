import { Body, Controller, Post } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Transfer } from '../transfer/entity/transfer/transfer';
import { TransferEvent } from '../transfer/events/transfer-created.event';

@Controller('account')
export class AccountController {
  constructor(private eventEmitter: EventEmitter2) {}

  @Post('/transfer')
  addTransfer(@Body() transfer: Transfer) {
    const transferInstance = new TransferEvent(
      transfer.accountIdFrom,
      transfer.accountIdTo,
      transfer.amount,
    );
    this.eventEmitter.emit('order.created', transferInstance);

    return {
      message: 'Evento emitido',
    };
  }
}
