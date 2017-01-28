import DS from 'ember-data';

export default DS.Model.extend({

  item: DS.attr('string'),
  complete: DS.attr('boolean')

});
