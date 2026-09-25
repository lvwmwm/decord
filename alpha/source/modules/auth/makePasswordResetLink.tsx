// Module ID: 6370
// Function ID: 6371
// Name: makePasswordResetLink
// Dependencies: [1074, 2]
// Exports: default

// Module 6370 (makePasswordResetLink)
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/auth/makePasswordResetLink.tsx");

export default function makePasswordResetLink(arg0) {
  return "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + Routes.RESET + "#token=" + arg0;
};
