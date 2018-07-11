import Route from '@ember/routing/route';

export default Route.extend({
   model(){
     return this.store.createRecord('login');
  },
   actions: {

    save(newLibrary) {
      newLibrary.save();
      alert('SignUp successfull');
        newLibrary.save().then(() => this.transitionTo('/'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
