import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allownewServers = false;
  servercreationstatus = 'no server created';
  serverName = 'text';
  servercreated = false;
  servers = ['T' , 'T 2' ];
  constructor() { 
    setTimeout(() => {
      this.allownewServers = true;
    },2000);
  }

  onCreateServer(){
    this.servercreated = true;
    this.servers.push(this.serverName);
    this.servercreationstatus = '';
  }

  onUpdateServerName(event:Event){
      this.serverName = (<HTMLInputElement>event.target).value;
  }
}
