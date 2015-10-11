import {CONTACT_DATA as CONTACTS} from '../common/contact-data';
import {Contact} from "../models/contact";

export class ContactService {

  private contacts:Contact[] = CONTACTS;

  getAll():Contact[] {
    return this.contacts;
  }

  getById(id):Contact {
    return this.contacts.find((it) => it.id == id)
  }
}
