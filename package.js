Package.describe({
  name: "bslocombe:entra-oauth",
  version: "0.0.6",
  summary: "Use Microsoft Entra to login, for Meteor 3+.",
  git: "https://github.com/bslocombe/meteor-entra-auth",
});

Package.onUse(function (api) {
  api.versionsFrom(["2.16", "3.0"]);

  api.use("oauth");
  api.use("oauth2");
  api.use("ecmascript");
  api.use("fetch", "server");
  api.use("random", "client");
  api.use("service-configuration");

  api.addFiles("entra_server.js", "server");
  api.addFiles("entra_client.js", "client");

  api.mainModule("namespace.js");

  api.export("Entra");
});
