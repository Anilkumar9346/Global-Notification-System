import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  //notificationSubject = new Subject<string>();  //intial value not necessary

  //latestNotificationBehSubject = new BehaviorSubject<string>("No Notifications Yet");  //initial Value necessary

  developmentTeamNotificationSubject = new Subject<string>();

  qATeamNotificationSubject = new Subject<string>();

  //developmentNotification$ = this.developmentTeamNotificationSubject.asObservable();
  //qATeamNotification$ = this.notificationSubject.asObservable();

  //notification$ = this.notificationSubject.asObservable();

  //latestNotifiacation$ = this.latestNotificationBehSubject.asObservable();

  developmentTeamLatestNotificationBehSub = new BehaviorSubject<string>("No Notifications Yet");

  qATeamLatestNotificationBehSub = new BehaviorSubject<string>("No Notifications Yet");

  sendNotification(notification : string | any | undefined , team:string) {

    console.log("sendNotification Called , Started in Services-------");

    if(team == "Development"){
      console.log("Sending Notification TO Development Team...");
      this.developmentTeamNotificationSubject.next(notification);
      this.developmentTeamLatestNotificationBehSub.next(notification);
    }
    else{
      this.qATeamNotificationSubject.next(notification);
      this.qATeamLatestNotificationBehSub.next(notification);
    }
    //this.notificationSubject.next(notification);
    //this.latestNotificationBehSubject.next(notification)

    console.log("sendNotification Ended in Services----------");
  }

}
