import {MessageService} from './message.service';

describe('MessageService', () => {
  let service;
  beforeEach(() => {
    service = new MessageService();
  });
  it('should have no messages to start', () => {
    (service.messages.length).should.equal(0);
  });
  it('should add a message when add is called');
  it('should clear all messages when clear is called');
});
