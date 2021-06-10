import { DesignUtlityService } from './../../appServices/design-utlity.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit{

  constructor(private _designUtility: DesignUtlityService) { }

   @ViewChild('addBtn') addBtn:any;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {

      let countVal = 'Video ' + count++

      console.log(countVal)

      this._designUtility.print(countVal, 'elContainer1')
      this._designUtility.print(countVal, 'elContainer2')
    })
  }
}
