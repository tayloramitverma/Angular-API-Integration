import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


 @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    console.log('Host Element Clicked');
}

}
