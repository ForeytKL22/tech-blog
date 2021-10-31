const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',

  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',

  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',

  },
  {
    title: 'Nunc purus.',

  },
  {
    title: 'Pellentesque eget nunc.',

  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',

  },
  {
    title: 'In hac habitasse platea dictumst.',

  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',

  },
  {
    title: 'Duis ac nibh.',

  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',

  },
  {
    title: 'In hac habitasse platea dictumst.',

  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',

  },
  {
    title: 'Donec dapibus.',

  },
  {
    title: 'Nulla tellus.',

  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',

  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',

  },
  {
    title: 'In hac habitasse platea dictumst.',

  },
  {
    title: 'Etiam justo.',

  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',

  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',

  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;