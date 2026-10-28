// Module ID: 7081
// Function ID: 7082
// Name: makePasswordResetLink
// Dependencies: [1087, 2]
// Exports: default

// Module 7081 (makePasswordResetLink)
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/auth/makePasswordResetLink.tsx");

export default function makePasswordResetLink(arg0) {
  return "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + Routes.RESET + "#token=" + arg0;
};
