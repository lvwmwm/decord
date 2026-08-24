// Module ID: 8632
// Function ID: 8633
// Name: makePasswordResetLink
// Dependencies: [676, 2]
// Exports: default

// Module 8632 (makePasswordResetLink)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

const Routes = ME.Routes;
const result = set.fileFinishedImporting("modules/auth/makePasswordResetLink.tsx");

export default function makePasswordResetLink(arg0) {
  return "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + Routes.RESET + "#token=" + arg0;
};
