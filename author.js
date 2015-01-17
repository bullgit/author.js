/**
 *
 * author.js
 *
 * Facts author or team of a project.
 *
 * Find the project on GitHub: 
 * https://github.com/bullgit/author.js
 *
 * ============================
 * Copyright, 2015 by Jose Pino
 * https://twitter.com/jofpin
 * ============================
 */
var author = (function() {
  "use strict";

  // Global
  var Author = window.Author = {};

  var self = {
    log: function(value) {
      console.log(value);
    },
    Error: function() {
      self.log("x~~~~~~~~~~~~~~~~~~~~~x");
      self.log("Error" + ": " + "Problem occurred!");
      self.log("x~~~~~~~~~~~~~~~~~~~~~x");
    },
    human: function() {
      Author.human = function(data) {
        if (typeof data !== "undefined" ) {
          self.project = data.project;
          self.name = data.name;
          self.website = data.website;
          self.date = data.date;
          self.twitter = data.twitter;
          self.email = data.email;
          self.standards = data.standards;
          self.lastupdate = data.lastupdate;
          self.location = data.location;
          self.version = data.version;
          self.log("----------");
          self.log("|{" + "Author" + "}|");
          self.log("----------")
          self.log("Project:" + " " + data.project);
          self.log("Version:" + " " + data.version)
          self.log("Website: " + data.website);
          self.log("Last Update: " + data.lastupdate);
          self.log("Location: " + data.location);
          self.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
          self.log("Standars: " + data.standards);
          self.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
          self.log("------------------------------");
          self.log("Created by ( " + data.name + ", " + data.twitter + " | " + data.email + " " +  "," + " " + data.date +")");
          self.log("------------------------------");
        } else {
          self.Error();
        }
      }
    },
    team: function() {
      Author.team = function(data) {
        if (typeof data !== "undefined" ) {
          self.project = data.project;
          self.members = data.members;
          self.website = data.website;
          self.date = data.date;
          self.standards = data.standards;
          self.lastupdate = data.lastupdate;
          self.version = data.version;
          self.log("----------");
          self.log("|{" + "Team" + "}|");
          self.log("----------")
          self.log("Project:" + " " + data.project);
          self.log("Members:" + " " + data.members);
          self.log("Version:" + " " + data.version)
          self.log("Website: " + data.website);
          self.log("Last Update: " + data.lastupdate);
          self.log("Copyright: " + data.date);
          self.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
          self.log("Standars: " + data.standards);
          self.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        } else {
          self.Error();
        }
      }
    },
    run: function() {
      // Open humans | Team
      self.human();
      self.team();
    }
  };
  
  // running functions
  self.run();

})(author);
