// Module ID: 7085
// Function ID: 7086
// Name: makePasswordResetLink
// Dependencies: [1084, 2]
// Exports: default

// Module 7085 (makePasswordResetLink)
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/auth/makePasswordResetLink.tsx");

export default function makePasswordResetLink(arg0) {
  return "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + Routes.RESET + "#token=" + arg0;
};
