var Sequelize = require("sequelize");
var sequelize = new Sequelize('socialize', 'social', 'social', {
  dialect: 'postgres'
});

exports.Activity = sequelize.define('Activity', {
  id: Sequelize.INTEGER,
  actvityType: Sequelize.STRING,
  text: Sequelize.TEXT
});

exports.Album = sequelize.define('Album', {
  id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  description: Sequelize.TEXT
});

exports.Annotation = sequelize.define('Annotation', {
  id: Sequelize.INTEGER,
  description: Sequelize.TEXT,
  x: Sequelize.INTEGER,
  y: Sequelize.INTEGER,
  height: Sequelize.INTEGER,
  width: Sequelize.INTEGER
});

exports.Comment = sequelize.define('Commment', {
  id: Sequelize.INTEGER,
  text: Sequelize.TEXT
});

exports.Confirm = sequelize.define('Confirm', {
  id: Sequelize.INTEGER
});

exports.Decline = sequelize.define('Decline', {
  id: Sequelize.INTEGER
});

exports.Event = sequelize.define('Event', {
  id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  venue: Sequelize.STRING,
  date: Sequelize.STRING,
  time: Sequelize.DATE
});

exports.Group = sequelize.define('Group', {
  id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  description: Sequelize.STRING
});

exports.Like = sequelize.define('Like', {
  id: Sequelize.INTEGER
});

exports.Mention = sequelize.define('Mention', {
  id: Sequelize.INTEGER
});

exports.Message = sequelize.define('Message', {
  id: Sequelize.INTEGER,
  subject: Sequelize.STRING,
  text: Sequelize.TEXT,
  read: Sequelize.BOOLEAN,
  thread: Sequelize.INTEGER
});

exports.Page = sequelize.define('Page', {
  id: Sequelize.INTEGER,
  title: Sequelize.STRING,
  body: Sequelize.TEXT
});

exports.Pending = sequelize.define('Pending', {
  id: Sequelize.INTEGER
});

exports.Photo = sequelize.define('Photo', {
  id: Sequelize.INTEGER,
  title: Sequelize.STRING,
  caption: Sequelize.STRING,
  privacy: Sequelize.STRING,
  format: Sequelize.STRING
});

exports.Post = sequelize.define('Post', {
  id: Sequelize.INTEGER
});

exports.Relationship = sequelize.define('Relationship', {
  id: Sequelize.INTEGER,
  text: Sequelize.TEXT
});

exports.Request = sequelize.define('Request', {
  id: Sequelize.INTEGER,
  text: Sequelize.TEXT
});

exports.Status = sequelize.define('Status', {
  id: Sequelize.INTEGER,
  text: Sequelize.TEXT
});

exports.User = sequelize.define('User', {
  id: Sequelize.INTEGER,
  email: Sequelize.STRING,
  nickname: Sequelize.STRING,
  formattedName: Sequelize.STRING,
  sex: Sequelize.STRING,
  relationshipStatus: Sequelize.STRING,
  photoUrl: Sequelize.STRING,
  location: Sequelize.STRING,
  description: Sequelize.STRING,
  interests: Sequelize.STRING,
  education: Sequelize.TEXT
});

exports.Wall = sequelize.define('Wall', {
  id: Sequelize.INTEGER
});
