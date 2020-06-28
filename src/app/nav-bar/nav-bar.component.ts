import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TermsAndConditionsComponent } from '../terms-and-conditions/terms-and-conditions.component';
import { ContactusComponent } from '../contactus/contactus.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    private modelService: NgbModal
  ) { }

  ngOnInit(): void {
    this.modelService.open(TermsAndConditionsComponent,{size:'xl',keyboard:false,backdrop:false});
  }

  toggleTermsAndConditions() {
    this.modelService.open(TermsAndConditionsComponent,{size:'xl',keyboard:false,backdrop:false});
  }

  toggleContactUs() {
    this.modelService.open(ContactusComponent,{size:'xl'});
  }
}
