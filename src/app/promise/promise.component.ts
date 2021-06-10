import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  promiseVal:any = '';

  dell = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black'
  }

  hp = {
    brand: 'HP',
    hardDisk: '2 TB',
    color: 'Silver'
  }

  notAvail = {
    brand: 'Not Available',
    status: 'Failed',
  }

  constructor() { }

  DellAvailable(){
    return true
  }

  HpAvailable(){
    return false
  }

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      // resolve('promise is resolve')
      // reject('promise is resolve')

      if(this.DellAvailable()){
        // resolve('Dell is purchased')
        resolve(this.dell)
      }else if(this.HpAvailable()){
        // resolve('Hp is purchased')
        resolve(this.hp)
      }else{
        // reject('Laptop not available')
        reject(this.notAvail)
      }

    })

    buyLaptop.then(res => {
      console.log('success => ', res)
      this.promiseVal = res;
    }).catch(res => {
      console.log('reject code => ', res)
      this.promiseVal = res;
    })
  }

}
