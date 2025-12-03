import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification-service';
import { CommonModule } from '@angular/common';
import { OneSubscriber } from '../one-subscriber/one-subscriber';

@Component({
  selector: 'app-subscribed-members',
  imports: [CommonModule,OneSubscriber],
  templateUrl: './subscribed-members.html',
  styleUrl: './subscribed-members.scss',
})
export class SubscribedMembers implements OnInit{

  currentSubscribedMembers:any[] = [
    {
      name:"Shreedhar Shivanand Suragond",
      empId:"200",
      role:"Software Engineer",
      image:"https://people.zoho.in/inspironlabs/viewPhoto?filename=1147345000000391191",
      team:"Development"
    },
    {
      name:"Chennakki Anil Kumar",
      empId:"324",
      role:"Software Engineer",
      image:"https://people.zoho.in/inspironlabs/viewPhoto?filename=1147345000000718009",
      team:"Development"
    },

    {
      name:"Mohammed Ghouse",
      empId:"144",
      role:"QA Engineer",
      image:"https://people.zoho.in/inspironlabs/viewPhoto?erecno=49748000006943083&mode=2&avatarid=213",
      team:"QA"
    },
    {
      name:"Sai Suman Maharana",
      empId:"317",
      role:"Software Engineer",
      image:"https://people.zoho.in/inspironlabs/viewPhoto?filename=1147345000000683192",
      team:"Development"
    },
    {
      name:"Debashish Naik",
      empId:"198",
      role:"Software Engineer",
      image:"https://people.zoho.in/inspironlabs/viewPhoto?erecno=49748000000207062&mode=2&avatarid=57",
      team:"Development"
    },
      {
      name:"Madhav Sharma",
      empId:"178",
      image:"https://people.zoho.in/inspironlabs/viewPhoto?erecno=49748000004248011&mode=2&avatarid=21",
      team:"QA"
    },
    {
      name:"Sourabh",
      empId:"109",
      role:"Software Engineer",
      image:"https://people.zoho.in/inspironlabs/viewPhoto?filename=1147345000000496237",
      team:"Development"
    },
    {
      name:"Parveen Kumar",
      empId:"207",
      role:"Software Engineer",
      image:"",
      team:"Development"
    },
    {
      name:"Ojas Sandeep Bendale",
      empId:"149",
      role:"Software Engineer",
      image:"https://people.zoho.in/inspironlabs/viewPhoto?erecno=49748000005067040&mode=2&avatarid=273",
      team:"Development"
    },

    {
      name:"Pavithra K",
      empId:"191",
      role:"QA Engineer",
      image:"https://people.zoho.in/inspironlabs/viewPhoto?erecno=49748000002257286&mode=2&avatarid=21",
      team:"QA"
    },


];

  constructor(public notificationService : NotificationService){}

  ngOnInit(): void {
      
  }
}
