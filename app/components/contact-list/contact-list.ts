import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2'
import {ContactService} from "../../common/contact-service";
import {Contact} from "../../models/contact";
import {Router} from "angular2/router";

@Component({
  selector: 'contact-list'
})
@View({
  directives: [CORE_DIRECTIVES],
  templateUrl: './components/contact-list/contact-list.html'
})
export class ContactList {

  private contacts:Contact[];

  constructor(contactService:ContactService, private _router:Router) {
    this.contacts = contactService.getAll();
  }

  showDetail(id) {
    this._router.navigate(['/Detail', {id:id}]);
  }
}
