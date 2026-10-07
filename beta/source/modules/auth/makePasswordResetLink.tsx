// Module ID: 6444
// Function ID: 6445
// Name: makePasswordResetLink
// Dependencies: [1085, 2]
// Exports: default

// Module 6444 (makePasswordResetLink)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/auth/makePasswordResetLink.tsx");

export default function makePasswordResetLink(arg0) {
  return "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + Routes.RESET + "#token=" + arg0;
};
