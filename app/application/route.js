import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('todo');
  },

  actions: {
       logout: function() {
           this.get('session').close().then(function() {
               this.transitionTo('application');
           }.bind(this));
       }
   }
});
