// Module ID: 6896
// Function ID: 6897
// Name: makePasswordResetLink
// Dependencies: [673, 2]
// Exports: default

// Module 6896 (makePasswordResetLink)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;

const Routes = ME.Routes;
const result = set.fileFinishedImporting("modules/auth/makePasswordResetLink.tsx");

export default function makePasswordResetLink(arg0) {
  return "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + Routes.RESET + "#token=" + arg0;
};
