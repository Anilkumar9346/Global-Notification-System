import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification-service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-one-subscriber',
  imports: [CommonModule],
  templateUrl: './one-subscriber.html',
  styleUrl: './one-subscriber.scss',
})
export class OneSubscriber implements OnInit {
@Input() subscriber:any;

  // allNotifications:any[] =[];
  // latestNotification:string = "";

  constructor(private notificationService : NotificationService){}

  allNotifications:any[] = [];

  allDevelopementTeamNotifications:any[] = [];

  allQATeamNotifications:any[] = [];

  developmentLatestNotification:string = "";

  qALatestNotification:string = "";

  latestNotification:string = "";

  showNotifications:boolean = false;


  ngOnInit(): void {

      if(this.subscriber.team == "Development"){
        console.log("Subscriber is a Developer....");
        this.notificationService.developmentTeamNotificationSubject.subscribe(notification => {
            console.log("notification for ", this.subscriber.name , notification);
            console.log("allNotification for ", this.subscriber.name , this.allNotifications);
            this.allDevelopementTeamNotifications.push(notification);
            this.allNotifications.push(notification);
          })
        
        this.notificationService.developmentTeamLatestNotificationBehSub.subscribe(notification => {
            console.log("latestnotification for ", this.subscriber.name , notification);

            this.latestNotification = notification
            this.developmentLatestNotification = notification;
        })
        

      }
      else{
        console.log("Subscriber is a Tester....");
        this.notificationService.qATeamNotificationSubject.subscribe(notification => {
            console.log("notification for ", this.subscriber.name , notification);
            this.allQATeamNotifications.push(notification);
            this.allNotifications.push(notification);
          })

        this.notificationService.qATeamLatestNotificationBehSub.subscribe(notification => {
            console.log("latestnotification for ", this.subscriber.name , notification);

            this.latestNotification = notification
            this.qALatestNotification = notification;
        })
      }

      console.log("allNotifications for " ,this.subscriber.name , this.allNotifications)
  }

  onClickArrow(){
    this.showNotifications = !this.showNotifications;
  }

}
