import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  obsMsg:string = '';

  videoSubscription:any;

  constructor() { }

  ngOnInit(): void {

    const broadCastVideo = interval(1000);

    this.videoSubscription = broadCastVideo.subscribe(res => {
      console.log(res)
      this.obsMsg = 'Video ' + res;

      if(res >= 5){
        this.videoSubscription.unsubscribe();
      }
    })
  }

}
