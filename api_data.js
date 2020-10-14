define({ "api": [
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get User",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Routes/User.js",
    "groupTitle": "",
    "name": "GetUserId"
  },
  {
    "type": "post",
    "url": "/user/verify",
    "title": "Verify Email",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>The code of account from mail inbox</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Routes/User.js",
    "groupTitle": "",
    "name": "PostUserVerify"
  }
] });