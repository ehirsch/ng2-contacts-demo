import {Component} from 'angular2/angular2';

import {Contact} from '../../models/contact'
import {ContactService} from "../../common/contact-service";
import {RouteParams, Router} from "angular2/router";

@Component({
  selector: 'contact-editor',
  templateUrl: './components/contact-detail/contact-detail.html'
})
export class ContactDetail {

  contact:Contact;

  constructor(contactService:ContactService, params:RouteParams, private _router:Router) {
    this.contact = contactService.getById(params.get('id'));
  }

  back(){
    this._router.navigate(['/List']);
  };

  edit(id){
    this._router.navigate(['/Edit', {id:id}]);
  };

}
