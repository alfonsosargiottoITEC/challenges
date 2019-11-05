const contactView = require('../views/contact.view')
const { check, validationResult } = require('express-validator');

// GET
const renderContact = (req, res) => contactView.getView(req.session);

const validateContactForm = ([
  check('email', 'El email es requerido.').not().isEmpty(),
  check('email', 'El email no es válido.').isEmail(),
  check('phonenumber', 'El teléfono es requerido.').not().isEmpty(),
  check('phonenumber', 'El teléfono no es válido.').isNumeric(),
  check('subject', 'El asunto es requerido.').not().isEmpty(),
  check('message', 'El mensaje es requerido.').not().isEmpty()
]);

// POST
const sendMessageContact = (req, res) => {
  // 1 data validation  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    req.session.errors = errors.array();
  } else {
    // 2 send email
    // @todo send the email using a service as sendgrid or local smpt with nodemail
    req.session.messageSent = true;
  }

  // 3 redirect
  res.redirect('/contacto');
}

module.exports = {
  renderContact,
  validateContactForm,
  sendMessageContact
}