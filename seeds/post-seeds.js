const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_body: 'Lorem ipsum dolor sit amet, consectetu ',
    user_id: 9
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_body: 'tore veritatis et quasi architecto beatae enim ipsam voluptatem quiar aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, ',
    user_id: 1
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_body: 'epturi sint occaecati cupiditate non providtia animi, id est laborum et dolorum fuga. Et harum qu',
    user_id: 6
  },
  {
    title: 'Nunc purus.',
    post_body: ';asodfaoshidfad',
    user_id: 7
  },
  {
    title: 'Pellentesque eget nunc.',
    post_body: 'oribus autem quibu aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. ',
    user_id: 2
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_body: ';asodfaoshidfad',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_body: 'oribus autem quiut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. ',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;