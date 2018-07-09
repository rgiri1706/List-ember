import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.findAll('user');
  },
  actions: {

    deleteLibrary(user) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        user.destroyRecord();
      }
    }
  }
});
