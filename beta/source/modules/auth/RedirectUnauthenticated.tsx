// Module ID: 16572
// Function ID: 16573
// Name: RedirectUnauthenticated
// Dependencies: [19, 1074, 1081, 21, 1083, 4666, 2]
// Exports: default, getRedirectPath

// Module 16572 (RedirectUnauthenticated)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import ConferenceModeConstants from "ConferenceModeConstants" /* 1081 */;
import utils_PathUtils from "utils/PathUtils" /* 1083 */;
import MemoryRouter from "MemoryRouter" /* 4666 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const CONFERENCE_MODE_ENABLED = ConferenceModeConstants.CONFERENCE_MODE_ENABLED;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/auth/RedirectUnauthenticated.tsx");

export default function RedirectUnauthenticated() {
  let to;
  const Redirect = MemoryRouter.Redirect;
  const tmp = jsx;
  if (CONFERENCE_MODE_ENABLED) {
    to = Routes.REGISTER;
  } else {
    const tmp2Result = utils_PathUtils;
    to = tmp2Result.getLoginPath(tmp4, false);
  }
  return tmp(Redirect, { to });
};
export const getRedirectPath = function getRedirectPath() {
  let REGISTER;
  const tmp2 = CONFERENCE_MODE_ENABLED;
  if (tmp2) {
    REGISTER = Routes.REGISTER;
  } else {
    const obj = utils_PathUtils;
    REGISTER = obj.getLoginPath(tmp, false);
  }
  return REGISTER;
};
