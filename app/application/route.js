import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('todo');

    //this.store.unloadAll();
    //this.store.findAll('todo').invoke('destroyRecord');

    /*this.store.findRecord('todo', '-Kbadw190yUTcsg73qss').then(function(todo) {
      todo.destroyRecord(); // => DELETE to /posts/1
    });*/

    /*this.store.get('todo').foreach(function(item) {
      item.destroyRecord();
    });
    return this.store.findAll('todo');*/
  }

});
