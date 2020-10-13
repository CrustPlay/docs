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
    "filename": "Routes/User.js",
    "groupTitle": "User",
    "name": "GetUserId"
  }
] });
