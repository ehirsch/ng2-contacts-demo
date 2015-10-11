import {Component, View} from 'angular2/angular2';

import {Contact} from '../../models/contact'
import {ContactService} from "../../common/contact-service";
import {ROUTER_DIRECTIVES, RouteParams} from "angular2/router";

@Component({
  selector: 'contact-editor'
})
@View({
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './components/contact-detail/contact-detail.html'
})
export class ContactDetail {

  contact:Contact;

  constructor(contactService:ContactService, params:RouteParams) {
    this.contact = contactService.getById(params.get('id'));
  }

}
