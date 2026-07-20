// Module ID: 9196
// Function ID: 72020
// Name: makePasswordResetLink
// Dependencies: []
// Exports: default

// Module 9196 (makePasswordResetLink)
const Routes = require(dependencyMap[0]).Routes;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/auth/makePasswordResetLink.tsx");

export default function makePasswordResetLink(arg0) {
  return "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + Routes.RESET + "#token=" + arg0;
};
