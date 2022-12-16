import { Injectable } from '@nestjs/common';
import { Notification } from 'src/application/entities/notification';
import { NotificationsRepository } from 'src/application/repositories/notifications-repository';
import { PrismaNotificationMapper } from './../mappers/prisma-notification-mappper';
import { PrismaService } from './../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const rawData = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: rawData,
    });
  }
}
