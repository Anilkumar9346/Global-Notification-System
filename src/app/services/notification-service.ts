import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  //notificationSubject = new Subject<string>();  //intial value not necessary

  //latestNotificationBehSubject = new BehaviorSubject<string>("No Notifications Yet");  //initial Value necessary

  private developmentTeamNotificationSubject = new Subject<string>();

  private qATeamNotificationSubject = new Subject<string>();

  private developmentTeamLatestNotificationBehSub = new BehaviorSubject<string>("No Notifications Yet");

  private qATeamLatestNotificationBehSub = new BehaviorSubject<string>("No Notifications Yet");

  //developmentNotification$ = this.developmentTeamNotificationSubject.asObservable();
  //qATeamNotification$ = this.notificationSubject.asObservable();

  //notification$ = this.notificationSubject.asObservable();

  //latestNotifiacation$ = this.latestNotificationBehSubject.asObservable();


  developmentTeamNotificationSubject$ = this.developmentTeamNotificationSubject.asObservable();

  qATeamNotificationSubject$ = this.qATeamNotificationSubject.asObservable();

  //Converting BEhSub to Observables..
  
  developmentTeamLatestNotificationBehSub$ = this.developmentTeamLatestNotificationBehSub.asObservable();

  qATeamLatestNotificationBehSub$ = this.qATeamLatestNotificationBehSub.asObservable();

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
