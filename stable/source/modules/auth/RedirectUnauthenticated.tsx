// Module ID: 16574
// Function ID: 16575
// Name: RedirectUnauthenticated
// Dependencies: [19, 1086, 1093, 21, 1095, 558, 576, 4668, 2]
// Exports: getRedirectPath

// Module 16574 (RedirectUnauthenticated)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1086 */;
import ConferenceModeConstants from "ConferenceModeConstants" /* 1093 */;
import utils_PathUtils from "utils/PathUtils" /* 1095 */;
import MemoryRouter from "MemoryRouter" /* 4668 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const CONFERENCE_MODE_ENABLED = ConferenceModeConstants.CONFERENCE_MODE_ENABLED;
const jsx = Fragment.jsx;
function getRedirectPath() {
  let REGISTER;
  const tmp2 = CONFERENCE_MODE_ENABLED;
  if (tmp2) {
    REGISTER = Routes.REGISTER;
  } else {
    const obj = utils_PathUtils;
    REGISTER = obj.getLoginPath(tmp, false);
  }
  return REGISTER;
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let REGISTER;
    const _location = location;
    const _location2 = location;
    const Redirect = tmp(4668).Redirect;
    const tmp5 = jsx;
    if (CONFERENCE_MODE_ENABLED) {
      REGISTER = Routes.REGISTER;
    } else {
      const tmpResult = utils_PathUtils;
      REGISTER = tmpResult.getLoginPath(tmp6, false);
    }
    const obj2 = { to: REGISTER };
    const tmp5Result = tmp5(Redirect, obj2);
    cResult[0] = tmp5Result;
    first = tmp5Result;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
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
});
const result = size.fileFinishedImporting("modules/auth/RedirectUnauthenticated.tsx");

export default tmp3;
export { getRedirectPath };
