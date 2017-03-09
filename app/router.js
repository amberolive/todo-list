import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('todo');
  this.route('session');
  this.route('login');
  this.route('protected');
});

export default Router;
