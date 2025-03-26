import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashbord/server-status/server-status.component';
import { TicketsComponent } from './dashbord/tickets/tickets.component';
import { TrafficComponent } from './dashbord/traffic/traffic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TicketsComponent,
    TrafficComponent
    
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}