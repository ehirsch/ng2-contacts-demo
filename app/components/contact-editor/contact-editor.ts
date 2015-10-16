import {Component, View, FORM_DIRECTIVES} from 'angular2/angular2';

import {Contact} from '../../models/contact'
import {ContactService} from "../../common/contact-service";
import {RouteParams, Router} from "angular2/router";
import {CloneService} from "../../common/clone-service";

@Component({
  selector: 'contact-editor',
  bindings: [CloneService]
})
@View({
  directives: [FORM_DIRECTIVES],
  templateUrl: './components/contact-editor/contact-editor.html'
})
export class ContactEditor {

  private contact:Contact;

  constructor(contactService:ContactService, params:RouteParams,
              private _cloneService:CloneService<Contact>,
              private _router:Router) {
    this.contact = contactService.getById(params.get("id"));
  }

  set contact (value:Contact) {
    this._cloneService.setItem(value);
  }

  get contact () {
    return this._cloneService.getItem();
  }

  save() {
    this._cloneService.commitChanges();
    this.back();
  }

  cancel() {
    this._cloneService.restoreItem();
    this.back();
  }

  private back(){
    this._router.navigate(['/Detail', {id:this.contact.id}]);
  };
}
