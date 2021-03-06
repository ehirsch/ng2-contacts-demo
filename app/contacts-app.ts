import {bootstrap} from 'angular2/bootstrap';
import {Component, provide} from 'angular2/core';
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PRIMARY_COMPONENT} from 'angular2/router'

import {Contact} from './models/contact';
import {ContactService} from './common/contact-service';
import {ContactList} from './components/contact-list/contact-list';
import {ContactDetail} from './components/contact-detail/contact-detail';
import {ContactEditor} from './components/contact-editor/contact-editor';

@Component({
  selector: 'contacts-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center">Contacts</a>
        </div>
      </nav>
    </div>
    <router-outlet></router-outlet>
    `
})
@RouteConfig([
  {path: '/', component: ContactList, as: 'List'},
  {path: '/contact/:id', component: ContactDetail, as: 'Detail'},
  {path: '/contact/:id/edit', component: ContactEditor, as: 'Edit'}
])
class ContactsApp {

}

bootstrap(ContactsApp, [ContactService, ROUTER_PROVIDERS, provide(ROUTER_PRIMARY_COMPONENT, {useValue:ContactsApp})]);
