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
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Routes/User.js",
    "groupTitle": "",
    "name": "GetUserId",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "verified",
            "description": "<p>Is email address verified</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bio",
            "description": "<p>Bio of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "dob",
            "description": "<p>Date of birth of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "phoneNumber",
            "description": "<p>Phone number of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "image",
            "description": "<p>Profile image url of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp of user creation</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Timestamp of user updation</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "teams",
            "description": "<p>Team objects</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "friends",
            "description": "<p>User objects</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "staff",
            "description": "<p>Is user a staff</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "manager",
            "description": "<p>Is user a manager</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "admin",
            "description": "<p>Is user a admin</p>"
          }
        ]
      }
    }
  }
] });
