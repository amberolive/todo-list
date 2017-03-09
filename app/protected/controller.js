import Ember from 'ember';

export default Ember.Controller.extend({

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
