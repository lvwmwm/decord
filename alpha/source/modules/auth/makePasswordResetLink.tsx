// Module ID: 7320
// Function ID: 7321
// Name: makePasswordResetLink
// Dependencies: [1071, 2]
// Exports: default

// Module 7320 (makePasswordResetLink)
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/auth/makePasswordResetLink.tsx");

export default function makePasswordResetLink(arg0) {
  return "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + Routes.RESET + "#token=" + arg0;
};
