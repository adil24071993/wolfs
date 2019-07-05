import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToSignUp(url){
    this.router.navigateByUrl(url).then((e) => {
      if(e){
        console.log('Navigation success')
      }else{
        console.log('Navigation failed')
      }
      
    })
  }

}
