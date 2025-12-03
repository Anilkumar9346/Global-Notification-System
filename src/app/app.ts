import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationListener } from './components/notification-listener/notification-listener';
import { NotificationSender } from './components/notification-sender/notification-sender';
import { SubscribedMembers } from './components/subscribed-members/subscribed-members';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , NotificationListener , NotificationSender , SubscribedMembers],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('GlobalNotificationSystem');

}
