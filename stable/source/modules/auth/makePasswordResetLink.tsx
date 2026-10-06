// Module ID: 6372
// Function ID: 6373
// Name: makePasswordResetLink
// Dependencies: [1086, 2]
// Exports: default

// Module 6372 (makePasswordResetLink)
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/auth/makePasswordResetLink.tsx");

export default function makePasswordResetLink(arg0) {
  return "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + Routes.RESET + "#token=" + arg0;
};
