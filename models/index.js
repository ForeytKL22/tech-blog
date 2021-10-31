const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

User.hasMany(Post);

Post.belongsTo(User, {
    onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
    onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
    onDelete: 'SET NULL'
});

User.hasMany(Comment, {
    onDelete: 'SET NULL'
});

Post.hasMany(Comment);



module.exports = { User, Post, Comment };