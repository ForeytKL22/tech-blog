const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_body: ';asodfaoshidfad',
    username: 'alesmonde0'
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_body: ';asodfaoshidfad',
    username: 'jwilloughway1'
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_body: ';asodfaoshidfad',
    username: 'djiri4'
  },
  {
    title: 'Nunc purus.',
    post_body: ';asodfaoshidfad',
    username: 'msprague5'
  },
  {
    title: 'Pellentesque eget nunc.',
    post_body: ';asodfaoshidfad',
    username: 'dstanmer3'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_body: ';asodfaoshidfad',
    username: 'tpenniell7'
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_body: ';asodfaoshidfad',
    username: 'msabbins8'
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;