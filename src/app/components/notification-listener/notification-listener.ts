import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-listener',
  imports: [CommonModule],
  templateUrl: './notification-listener.html',
  styleUrl: './notification-listener.scss',
})
export class NotificationListener implements OnInit{
  allNotifications:string[] = [];
  latestNotification:string = "Latest";
  constructor(private notificationService : NotificationService){}

  ngOnInit(): void {

      console.log("ngOnInint Started in NotificationListener..");

      // this.notificationService.notification$.subscribe(message => {
      //   this.allNotifications.push(message)
      //   console.log("allNotifications after pushing : ", this.allNotifications)
        
      // });
      // this.notificationService.latestNotifiacation$.subscribe(latestMessage => {
        
      //   this.latestNotification = latestMessage;
      //   console.log("latestNotification after modifiying : ", this.latestNotification);
      
      // });    
      
      // console.log("allNotifications : ", this.allNotifications);
      // console.log("latestNotifiacation : " , this.latestNotification);
      
      //this.notificationService.sendNotification();
      console.log("ngOnInint Ended in NotificationListener..");
      
      //this.notificationService.sendNotification(undefined);
      
  }
}
