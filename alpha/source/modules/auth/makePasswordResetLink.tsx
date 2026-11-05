// Module ID: 7272
// Function ID: 7273
// Name: makePasswordResetLink
// Dependencies: [1072, 2]
// Exports: default

// Module 7272 (makePasswordResetLink)
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/auth/makePasswordResetLink.tsx");

export default function makePasswordResetLink(arg0) {
  return "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + Routes.RESET + "#token=" + arg0;
};
