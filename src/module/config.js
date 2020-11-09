const config = require('config/db.json');

class Config {
  static data(var_name, value) {
    if(config.product) {
      return config.product[var_name] || process.env[var_name] || value
    }
    return process.env[var_name] || value
  }

  static all_data() {
    return {
      'username': this.data('username'),
      'password': this.data('password'),
      'database': this.data('database'),
      'host': this.data('host'),
      'dialect': this.data('dialect'),
    }
  }
}

module.exports = Config
