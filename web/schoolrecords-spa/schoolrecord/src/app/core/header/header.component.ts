import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showHeader = false;
 
  toggleHeader(): void{
    alert('Teste do menu hamburger');
    this.showHeader = !this.showHeader;
  }

  
  constructor() {}

  ngOnInit(): void {}
}
