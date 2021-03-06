import { Component } from '@angular/core';
import { BackendService } from './core/backend/backend.service';

import { EventBusService } from './core/event-bus/event-bus.service';
import { ErrorHandlerService } from './core/error-handler/error-handler.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {

	showCartIcon = false

	constructor(
		private backendService: BackendService,
		private eventBusService: EventBusService,
		private errorHandlerService: ErrorHandlerService
	) {
		this.eventBusService.changeSharedOptions.subscribe((options) => this.updateSharedOptions(options));
	}

	updateSharedOptions(options) {
		this.showCartIcon = options.showCartIcon || false;
	}

	ngOnInit() {

	}
}
