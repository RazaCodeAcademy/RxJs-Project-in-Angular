import { DesignUtlityService } from './../../appServices/design-utlity.service';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  obsMsg:string = '';

  videoSubscription:any;

  constructor(private _designUtility: DesignUtlityService) { }

  ngOnInit(): void {

    // const broadCastVideo = interval(1000);
    const broadCastVideo = timer(5000, 1000);

    this.videoSubscription = broadCastVideo.subscribe(res => {
      console.log(res)
      this.obsMsg = 'Video ' + res;

      this._designUtility.print(this.obsMsg, 'elContainer1')
      this._designUtility.print(this.obsMsg, 'elContainer2')
      this._designUtility.print(this.obsMsg, 'elContainer3')

      if(res >= 5){
        this.videoSubscription.unsubscribe();
      }
    })
  }

}
