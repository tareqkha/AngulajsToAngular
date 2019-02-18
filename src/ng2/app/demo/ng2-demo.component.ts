
import { Component, OnInit, Inject } from '@angular/core';
import { PHONE_SERVICE } from "../phone.service";
@Component({
  selector: 'ng2-demo',
  templateUrl: './ng2-demo.component.html'
})
export class Ng2DemoComponent implements OnInit {

  phones: any[] = [];

  constructor(
    @Inject(PHONE_SERVICE) private phoneService: any) {
    }

    ngOnInit() {
      this.phones = this.phoneService.query();
    }

}
