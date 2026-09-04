// Module ID: 16667
// Function ID: 16668
// Name: RedirectUnauthenticated
// Dependencies: [19, 673, 680, 21, 504, 4313, 2]
// Exports: default, getRedirectPath

// Module 16667 (RedirectUnauthenticated)
import noopAll from "noop" /* 19 */;
import getAuthenticationPath from "getAuthenticationPath" /* 504 */;
import _extends from "_extends" /* 4313 */;
import { Routes } from "ME" /* 673 */;
import { CONFERENCE_MODE_ENABLED } from "CONFERENCE_MODE_ENABLED" /* 680 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/auth/RedirectUnauthenticated.tsx");

export default function RedirectUnauthenticated() {
  if (CONFERENCE_MODE_ENABLED) {
    let to = Routes.REGISTER;
  } else {
    to = getAuthenticationPath.getLoginPath(tmp4, false);
    const tmp2Result = getAuthenticationPath;
  }
  return jsx(_extends.Redirect, { to });
};
export const getRedirectPath = function getRedirectPath() {
  if (CONFERENCE_MODE_ENABLED) {
    let REGISTER = Routes.REGISTER;
  } else {
    REGISTER = getAuthenticationPath.getLoginPath(tmp, false);
    const obj = getAuthenticationPath;
  }
  return REGISTER;
};
