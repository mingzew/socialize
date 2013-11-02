assert = require('assert');
models = require('../../models/base');

describe('User', function() {

  beforeEach(function() {
    user = models.Wall;
  });

  it('should create a new user', function(){
    user.create({id: 99}).success(function(user) {
      assert.equal(user.id, 99);
    });
  });

});

describe('Activity', function() {

  beforeEach(function() {
    activity = models.Activity;
  });

  it('should create a new activity', function(){
    activity.create({id: 1,
                    activityType: 'Test',
                    description: 'This is testing the creation of a new Activity'}).success(function(a) {
                      assert.equal(a.id, 1);
                    });
  });
});

describe('Album', function() {

  beforeEach(function() {
    album = models.Album;
  });

  it('should create a new album', function(){
    album.create({id: 1, name: 'Pictures', description: 'A collection of all my pictures'});
    album.find({where: {id: '1'}});
  });

});

describe('Comment', function() {

  beforeEach(function() {
    comment = models.Comment;
  });

  it('should create a new comment', function(){
    comment.create({id: 1, text: 'This is a comment'});
    comment.find({where: {id: '1'}});
  });

});

describe('Annotation', function() {

  beforeEach(function() {
    annotation = models.Annotation;
  });

  it('should create a new annotation', function(){
    annotation.create({id: 1, description: 'A new annotation', x: 1, y: 1, height: 1, width: 1});
    annotation.find({where: {id: '1'}});
  });

});

describe('Comment', function() {

  beforeEach(function() {
    comment = models.Comment;
  });

  it('should create a new annotation', function(){
    comment.create({id: 1, text: 'This is a comment'}).success(function(comment) {
      assert.equal(comment.id, 1);
    });
  });
});


describe('Confirm', function() {

  beforeEach(function() {
    confirm = models.Confirm;
  });

  it('should create a new confirm', function(){
    confirm.create({id: 1}).success(function(confirm) {
      assert.equal(confirm.id, 1);
    });
  });
});

describe('Decline', function() {

  beforeEach(function() {
    decline = models.Decline;
  });

  it('should create a new decline', function(){
    decline.create({id: 1}).success(function(decline) {
      assert.equal(decline.id, 29991);
    });
  });
});

describe('Event', function() {

  beforeEach(function() {
    event = models.Event;
  });

  it('should create a new decline', function(){
    event.create({id: 1}).success(function(event) {
      assert.equal(event.id, 1);
    });
  });
});
