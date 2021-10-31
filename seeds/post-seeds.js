const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_body: ';asodfaoshidfad'
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_body: ';asodfaoshidfad'
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_body: ';asodfaoshidfad'
  },
  {
    title: 'Nunc purus.',
    post_body: ';asodfaoshidfad'
  },
  {
    title: 'Pellentesque eget nunc.',
    post_body: ';asodfaoshidfad'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_body: ';asodfaoshidfad'
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_body: ';asodfaoshidfad'
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;