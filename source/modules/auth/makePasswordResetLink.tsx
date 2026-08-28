// Module ID: 7676
// Function ID: 7677
// Name: makePasswordResetLink
// Dependencies: [676, 2]
// Exports: default

// Module 7676 (makePasswordResetLink)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

const Routes = ME.Routes;
const result = set.fileFinishedImporting("modules/auth/makePasswordResetLink.tsx");

export default function makePasswordResetLink(arg0) {
  return "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + Routes.RESET + "#token=" + arg0;
};
