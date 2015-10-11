import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2'
import {ContactService} from "../../common/contact-service";
import {Contact} from "../../models/contact";
import {RouterLink} from "angular2/router";

@Component({
  selector: 'contact-list'
})
@View({
  directives: [CORE_DIRECTIVES, RouterLink],
  templateUrl: './components/contact-list/contact-list.html'
})
export class ContactList {

  private contacts:Contact[];

  constructor(contactService:ContactService) {
    this.contacts = contactService.getAll();
  }
}
