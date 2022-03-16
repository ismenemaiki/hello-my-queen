import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  painel: any;
  close: any;

  constructor() { }

  ngOnInit(): void {
    this.painel = document.getElementById('sidepanel');
  }

  openMenu() {
    this.painel.style.width = '75%';
    this.painel.style.height = '100%';

    setTimeout(() => {
      document.addEventListener('click', this.handleClickOutside, true);
    }, 200);
  }

  closeMenu() {
    this.painel.style.width = '0';
  }

  handleClickOutside(el: any) {
    if (el.path[0].id !== 'sidepanel') {
      this.close = document.getElementById('sidepanel');
      this.close.style.width = '0';
    }
    document.removeEventListener('click', this.handleClickOutside, false);
  }
}
