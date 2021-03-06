var express = require('express'),
    router = express.Router(),
    adminRouter = express.Router(),
    apiRouter = express.Router(),

    authFilter = require('./filters/auth'),

    adminHomeResource = require('./resources/admin/home'),
    adminUserResource = require('./resources/admin/users'),

    sessionResource = require('./resources/session');
    passwordResetResource = require('./resources/password-reset');

adminRouter.use(authFilter);
adminRouter.use('/', adminHomeResource);
adminRouter.use('/users', adminUserResource);

router.use('/admin', adminRouter);
router.use('/api', apiRouter);
router.use('/', sessionResource);
router.use('/reset', passwordResetResource);

module.exports = router;
