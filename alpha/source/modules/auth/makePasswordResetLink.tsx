// Module ID: 7123
// Function ID: 7124
// Name: makePasswordResetLink
// Dependencies: [1072, 2]
// Exports: default

// Module 7123 (makePasswordResetLink)
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/auth/makePasswordResetLink.tsx");

export default function makePasswordResetLink(arg0) {
  return "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + Routes.RESET + "#token=" + arg0;
};
