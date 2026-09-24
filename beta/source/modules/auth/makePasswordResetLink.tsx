// Module ID: 7229
// Function ID: 7230
// Name: makePasswordResetLink
// Dependencies: [1078, 2]
// Exports: default

// Module 7229 (makePasswordResetLink)
import Constants from "Constants" /* 1078 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/auth/makePasswordResetLink.tsx");

export default function makePasswordResetLink(arg0) {
  return "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + Routes.RESET + "#token=" + arg0;
};
