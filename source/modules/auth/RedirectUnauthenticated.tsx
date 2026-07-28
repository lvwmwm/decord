// Module ID: 15541
// Function ID: 119298
// Name: getRedirectPath
// Dependencies: [31, 653, 660, 33, 484, 3993, 2]
// Exports: default

// Module 15541 (getRedirectPath)
import "result";
import { Routes } from "ME";
import { CONFERENCE_MODE_ENABLED } from "CONFERENCE_MODE_ENABLED";
import { jsx } from "jsxProd";

const require = arg1;
function getRedirectPath() {
  if (CONFERENCE_MODE_ENABLED) {
    let REGISTER = Routes.REGISTER;
  } else {
    REGISTER = require(484) /* getAuthenticationPath */.getLoginPath(tmp, false);
    const obj = require(484) /* getAuthenticationPath */;
  }
  return REGISTER;
}
const result = require("CONFERENCE_MODE_ENABLED").fileFinishedImporting("modules/auth/RedirectUnauthenticated.tsx");

export default function RedirectUnauthenticated() {
  const obj = { to: getRedirectPath() };
  return jsx(require(3993) /* _extends */.Redirect, { to: getRedirectPath() });
};
export { getRedirectPath };
