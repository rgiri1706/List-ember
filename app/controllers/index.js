import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';

export default Controller.extend({
            
            response:'',
            emailAddress:'',
            isDisabled:empty('emailAddress'),
            actions: {

    saveInvitation() {
     const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', { email: email });
      newInvitation.save();

     alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }
});
