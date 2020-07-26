let secureEnv = require('secure-env');
global.env = secureEnv({secret:'teste'});

{
  "development": {
    "username": "root",
      "password": null,
        "database": "database_development",
          "host": "127.0.0.1",
            "dialect": "mysql"
  },
  "test": {
    "username": global.env.CI.DB.USERNAME,
      "password": global.env.CI.DB.PASS,
        "database": global.env.CI.DB.NAMEDB,
          "host": global.env.CI.DB.HOST,
            "dialect": "mysql"
  },
  "production": {
    "username": global.env.PD.DB.USERNAME,
      "password": global.env.PD.DB.PASS,
        "database": global.env.PD.DB.NAMEDB,
          "host": global.env.PD.DB.HOST,
            "dialect": "mysql"
  }
}
