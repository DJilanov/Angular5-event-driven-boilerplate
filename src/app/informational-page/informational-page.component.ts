import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BackendService } from '../core/backend/backend.service';
import { ErrorHandlerService } from '../core/error-handler/error-handler.service';
import { EventBusService } from '../core/event-bus/event-bus.service';

const sharredOptions = {
	profileBtn: true,
	info: true,
	hamburgerBtn: true
};

@Component({
	selector: 'app-informational-page',
	templateUrl: './informational-page.component.html',
	styleUrls: ['./informational-page.component.scss']
})
export class InformationalPageComponent {

	constructor(
		private router: Router,
		private backendService: BackendService,
		private eventBusService: EventBusService,
		private errorHandlerService: ErrorHandlerService
	) {
		this.eventBusService.emitChangeSharedOptions(sharredOptions);
	}
}