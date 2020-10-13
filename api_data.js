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
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the tourney</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the tourney</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "banner",
            "description": "<p>Banner urls of the tourney</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "banner.small",
            "description": "<p>Small banner url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "banner.large",
            "description": "<p>Large banner url</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "game",
            "description": "<p>Id of the game</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>Id of tourney type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "platforms",
            "description": "<p>Allowed platforms for players</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rules",
            "description": "<p>Rules of the tourney</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "discord",
            "description": "<p>Url of the discord server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "website",
            "description": "<p>Url of the website</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entry_fee",
            "description": "<p>Entry fee of the tourney</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prize_pool",
            "description": "<p>Prize pool of the tourney</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prizes",
            "description": "<p>Prizes distribution</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total_teams",
            "description": "<p>Total teams can register</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "start_datetime",
            "description": "<p>Start datetime of registration</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "end_datetime",
            "description": "<p>End datetime of registration</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "sponsers",
            "description": "<p>Array of sponser's image urls</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "organizers",
            "description": "<p>Array of organizer's image urls</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "brackets",
            "description": "<p>Array of bracket objects</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "stages",
            "description": "<p>Array of stages object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stages.stage",
            "description": "<p>Id of the stage</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stages.name",
            "description": "<p>Name of the stage</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stages.max_teams",
            "description": "<p>Max teams to select for next round</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stages.teams_per_group",
            "description": "<p>No of max teams per group</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stages.matches_per_group",
            "description": "<p>No of min matches per group</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "groups",
            "description": "<p>Array of group objects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the tourney</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "featured",
            "description": "<p>Whether the tourney is featured</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "reg",
            "description": "<p>Whether the registration is open</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "live",
            "description": "<p>Whether the tourney is ongoing</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "public",
            "description": "<p>Whether the tourney is visible to public</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>Logo url of the team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>Code of the team</p>"
          },
          {
            "group": "Success 200",
            "type": "Object|String",
            "optional": false,
            "field": "user",
            "description": "<p>User who created the team</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "lineup",
            "description": "<p>Array of lineup objects</p>"
          },
          {
            "group": "Success 200",
            "type": "Object|String",
            "optional": false,
            "field": "lineup.user",
            "description": "<p>The user object or user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lineup.ingame_id",
            "description": "<p>Ingame id of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lineup.ingame_name",
            "description": "<p>Ingame name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "stats",
            "description": "<p>Stats of the team</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "stats.matches_played",
            "description": "<p>No of matches played</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "stats.tourneys_played",
            "description": "<p>No of tourneys played</p>"
          }
        ]
      }
    }
  }
] });
