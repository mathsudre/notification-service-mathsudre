import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['more-bird-5572-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: 'bW9yZS1iaXJkLTU1NzIkP9gygCrj-nvY8JaajBctsrIRpAKbqPAcIpHybNHovpo',
          password: 'cs6RX4PbQyNy7tvcAvR0SG1TJLsIMn47T4yTk-KWvXBHjGIMOsg4V6s5oznv6lNXWtOJVQ==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
