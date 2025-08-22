module.exports.home = function(req, res) {
  res.render('home', { title: 'Campus Dining Home' });
};

module.exports.menu = function(req, res) {
  res.render('menu', { title: 'Food Menu' });
};

module.exports.orderStatus = function(req, res) {
  res.render('order-status', { title: 'Order Status' });
};

module.exports.login = function(req, res) {
  res.render('login', { title: 'Login' });
};
