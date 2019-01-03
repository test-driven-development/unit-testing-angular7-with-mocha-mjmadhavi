import {MessageService} from './message.service';

describe('MessageService', () => {
  it('should have no messages to start', () => {
    const service = new MessageService();
    (service.messages.length).should.equal(1);
  });
  it('should add a message when add is called');
  it('should clear all messages when clear is called');
});
