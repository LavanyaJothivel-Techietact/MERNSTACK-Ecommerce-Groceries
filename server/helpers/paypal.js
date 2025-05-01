const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "ATtb8rpENSb_8AqmCy0CwnwbQJxZJhvk1TccT3skEe15gbjZ4rmI03A8h22YQ3bZYj9ai8CEC5WSFfDC",
  client_secret: "EGq4c45wMWMkLEaEOn_aWRlmzMZSHa29GbCKNJP5xmlt45str3CHF2Lle71pgGjth683cCr4ZeTj75Xd",
});

module.exports = paypal;
