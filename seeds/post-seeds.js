const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_body: ';asodfaoshidfad',
    user_id: 9
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_body: ';asodfaoshidfad',
    user_id: 1
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_body: ';asodfaoshidfad',
    user_id: 6
  },
  {
    title: 'Nunc purus.',
    post_body: ';asodfaoshidfad',
    user_id: 7
  },
  {
    title: 'Pellentesque eget nunc.',
    post_body: ';asodfaoshidfad',
    user_id: 2
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_body: ';asodfaoshidfad',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_body: ';asodfaoshidfad',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;