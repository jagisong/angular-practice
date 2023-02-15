import { style } from "@angular/animations";
import { Component } from "@angular/core";
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color : white;
        }
    `]
})
export class ServerComponent {
    serverid = 10;
    serverstatus: string = 'running';

    constructor() {
        this.serverstatus = Math.random() > 0.5 ? 'running' : 'not running';
    }

    getserverstatus() {
        return this.serverstatus;
    }

    getColor() {
        return this.serverstatus === 'running' ? 'green' : 'red';
    }
}