const express = require('express');
const router = express.Router();

const extra_controller = require('../controllers/extra.controller');
router.get('/test',extra_controller.test);
router.post('/create', extra_controller.extra_create);
router.get('/:id', extra_controller.extra_details);
router.put('/:id/update', extra_controller.extra_update);
router.delete('/:id/delete', extra_controller.extra_delete);
module.exports = router;