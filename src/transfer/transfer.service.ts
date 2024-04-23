import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { TransferEvent } from './events/transfer-created.event';

@Injectable()
export class TransferService {
  @OnEvent('order.created')
  handleOrderCreatedEvent(transferEvent: TransferEvent) {
    console.log(
      `Transfer Event recived. Sending ${transferEvent.amount} from ${transferEvent.accountIdFrom} to ${transferEvent.accountIdTo} `,
      transferEvent,
    );
  }
}
