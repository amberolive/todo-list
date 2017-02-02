import Ember from 'ember';

export default Ember.Controller.extend({

<<<<<<< HEAD

=======
>>>>>>> 9bb0f26ee684fb3ca74e78ba956b176825557172
  actions: {
      addItem() {
        var newItem = this.store.createRecord('todo', {
          complete: false,
          item: this.get('item'),

        });
        newItem.save();

      }
    }
});
