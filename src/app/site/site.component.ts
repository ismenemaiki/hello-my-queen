import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
})
export class SiteComponent implements OnInit {
  isMobile: boolean = false;

  constructor() {}

  ngOnInit(): void {

  }
  teste(x: any) {
    this.isMobile = x
    console.log('VALOR ISMOBILE EM SITE.COMPONENT', x);

  }
}
