import { Directive, HostListener, Input, Inject } from '@angular/core';

import * as Services from '../services/index';
import { ChatService } from '../services/index';

@Directive({
    selector: '[OnAppExit]'
})
export class OnAppExitDirective {
    @Input('OnAppExit') OnAppExit: boolean;

    constructor(private chatService: Services.ChatService) {
    }

    @HostListener('window:beforeunload', ['$event'])
    async onExit(event) {
        if (this.OnAppExit) {
            this.chatService.disconnect();
        }
    }
}