// Module ID: 17223
// Function ID: 17224
// Name: RedirectUnauthenticated
// Dependencies: [19, 1078, 1085, 21, 1087, 558, 568, 4591, 2]
// Exports: getRedirectPath

// Module 17223 (RedirectUnauthenticated)
import c from "c" /* 568 */;
import utils_PathUtils from "utils/PathUtils" /* 1087 */;
import _mod4591 from "module_4591" /* 4591 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1078).Routes;
const CONFERENCE_MODE_ENABLED = fn(1085).CONFERENCE_MODE_ENABLED;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
function getRedirectPath() {
  if (CONFERENCE_MODE_ENABLED) {
    let REGISTER = Routes.REGISTER;
  } else {
    REGISTER = utils_PathUtils.getLoginPath(tmp, false);
  }
  return REGISTER;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/RedirectUnauthenticated.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _location = location;
    const _location2 = location;
    if (CONFERENCE_MODE_ENABLED) {
      let REGISTER = Routes.REGISTER;
    } else {
      REGISTER = tmp(1087).getLoginPath(tmp5, false);
      const tmpResult = tmp(1087);
    }
    const obj2 = { to: REGISTER };
    const tmp4Result = jsx(tmp(4591).Redirect, { to: REGISTER });
    cResult[0] = tmp4Result;
  } else {
    return cResult[0];
  }
}) : (() => {
  if (CONFERENCE_MODE_ENABLED) {
    let to = Routes.REGISTER;
  } else {
    to = utils_PathUtils.getLoginPath(tmp4, false);
    const tmp2Result = utils_PathUtils;
  }
  return jsx(_mod4591.Redirect, { to });
});
export { getRedirectPath };
