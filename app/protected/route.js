import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    if(!this.get('session.isAuthenticated')){
      this.transitionTo('application');
    }
  },

  model() {
    return this.store.findAll('todo');
  }
});
