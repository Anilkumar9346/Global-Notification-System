import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification-service';

@Component({
  selector: 'app-notification-sender',
  imports: [],
  templateUrl: './notification-sender.html',
  styleUrl: './notification-sender.scss',
})
export class NotificationSender implements OnInit{
  notification:string="";

  team:string = "Development";

  constructor(private notificationService : NotificationService){}

  sendNotifiacation(){

    console.log("sendNotifiacation Started in NotificationSender");

    console.log("notification" , this.notification)
    this.notificationService.sendNotification(this.notification , this.team);
    this.notification="";
    
    console.log("sendNotifiacation Ended in NotificationSender")
    

  }

  onChaneNotification({target} : Event){
    this.notification= (target as HTMLInputElement).value;
  }

  onChangeTeam({target}:Event){
    console.log("onChangeTeam Started")
    this.team = (target as HTMLInputElement).value
  }
  ngOnInit(): void {
      console.log("ngOnInint Started in NotificationSender")

      console.log("ngOnInint Ended in NotificationSender")
  }
}
