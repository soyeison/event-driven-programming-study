import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { TransferEvent } from '../transfer/events/transfer-created.event';

@Injectable()
export class AlertService {
  private static ALERT_AMOUNT: number = 3000;
  @OnEvent('order.created')
  handleOrderCreatedEvent(transferEvent: TransferEvent) {
    if (transferEvent.amount > AlertService.ALERT_AMOUNT) {
      console.log('Transfer Event recived. Sending alert: ', transferEvent);
    } else {
      console.log('Transfer Event recived. Alert not needed');
    }
  }
}
