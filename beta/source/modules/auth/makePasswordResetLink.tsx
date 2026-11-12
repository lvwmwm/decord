// Module ID: 7227
// Function ID: 7228
// Name: makePasswordResetLink
// Dependencies: [1072, 2]
// Exports: default

// Module 7227 (makePasswordResetLink)
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/auth/makePasswordResetLink.tsx");

export default function makePasswordResetLink(arg0) {
  return "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + Routes.RESET + "#token=" + arg0;
};
