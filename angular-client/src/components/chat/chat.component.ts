import { Component, OnInit, OnDestroy } from '@angular/core';

import * as Services from '../../services/index';

@Component({
  selector: 'chat-component',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  messages = [];
  connection;
  message;

  constructor(private chatService: Services.ChatService) { }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
