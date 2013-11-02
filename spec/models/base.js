models = require('../../models/base');

describe("User", function() {
  var user;

  beforeEach(function() {
    user = models.User;
  });

  it("should create a new user", function() {
    user.create({id: 1}).success(function(o) {
      expect(o.id).toEqual(1);
    });
  });
});
