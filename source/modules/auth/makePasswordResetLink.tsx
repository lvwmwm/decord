// Module ID: 9201
// Function ID: 72056
// Name: makePasswordResetLink
// Dependencies: []
// Exports: default

// Module 9201 (makePasswordResetLink)
const Routes = require(dependencyMap[0]).Routes;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/auth/makePasswordResetLink.tsx");

export default function makePasswordResetLink(arg0) {
  return "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + Routes.RESET + "#token=" + arg0;
};
