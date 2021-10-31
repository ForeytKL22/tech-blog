const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',

  },
  {
    comment_text: 'Morbi a ipsum.',

  },
  {
    comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
 
  },
  {
    comment_text: 'Donec ut mauris eget massa tempor convallis.',

  },
  {
    comment_text:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
 
  },
  {
    comment_text:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',

  },
  {
    comment_text: 'Quisque porta volutpat erat.',

  },
  {
    comment_text: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',

  },
  {
    comment_text:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',

  },
  {
    comment_text: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',

  },
  {
    comment_text:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',

  },
  {
    comment_text:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',

  },
  {
    comment_text: 'Curabitur convallis.',

  },
  {
    comment_text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
 
  },
  {
    comment_text: 'Morbi non quam nec dui luctus rutrum.',

  },
  {
    comment_text: 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',

  },
  {
    comment_text:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',

  },
  {
    comment_text: 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',

  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',

  },
  {
    comment_text: 'Nam tristique tortor eu pede.',
 
  },
  {
    comment_text: 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',

  },
  {
    comment_text: 'Proin eu mi. Nulla ac enim.',

  },
  {
    comment_text: 'Sed ante. Vivamus tortor.',

  },
  {
    comment_text: 'Aliquam quis turpis eget elit sodales scelerisque.',

  },
  {
    comment_text: 'Donec quis orci eget orci vehicula condimentum.',
 
  },
  {
    comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',

  },
  {
    comment_text: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',

  },
  {
    comment_text: 'Maecenas ut massa quis augue luctus tincidunt.',

  },
  {
    comment_text: 'Cras in purus eu magna vulputate luctus.',

  },
  {
    comment_text: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',

  },
  {
    comment_text: 'Proin at turpis a pede posuere nonummy.',

  },
  {
    comment_text: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
 
  },
  {
    comment_text:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
 
  },
  {
    comment_text:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',

  },
  {
    comment_text: 'Vestibulum ac est lacinia nisi venenatis tristique.',

  },
  {
    comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',

  },
  {
    comment_text:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',

  },
  {
    comment_text: 'Integer ac leo. Pellentesque ultrices mattis odio.',

  },
  {
    comment_text: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
  },
  {
    comment_text:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
  },
  {
    comment_text: 'Proin risus. Praesent lectus.',
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;