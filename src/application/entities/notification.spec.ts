import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('New friend solicitation'),
      category: 'social',
      recipientId: 'test-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
