const router = require('express').Router();
const apiRoutes = require('./api');
// const publicRoutes = require('./public')

router.use('/api', apiRoutes);
// router.use('/', publicRoutes);



router.use((req, res) => {
    res.status(404).end();
  });
  


  module.exports = router;