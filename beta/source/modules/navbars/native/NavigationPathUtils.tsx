// Module ID: 12939
// Function ID: 12940
// Name: NavigationPathUtils
// Dependencies: [1078, 558, 568, 4591, 2]
// Exports: getSelectedSpecialNavigationPath

// Module 12939 (NavigationPathUtils)
import c from "c" /* 568 */;
import Constants from "Constants" /* 1078 */;
import _mod4591 from "module_4591" /* 4591 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const SpecialNavigationPath = { FRIENDS: 0, [0]: "FRIENDS" };
function getSelectedSpecialNavigationPath(pathname) {
  if (pathname.pathname === Routes.FRIENDS) {
    return obj.FRIENDS;
  }
}
const result = size.fileFinishedImporting("modules/navbars/native/NavigationPathUtils.tsx");

export { SpecialNavigationPath };
export { getSelectedSpecialNavigationPath };
export const useSelectedSpecialNavigationPath = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = c;
  const cResult = obj.c(2);
  const _location = _mod4591.useLocation();
  if (cResult[0] !== _location) {
    let FRIENDS;
    if (_location.pathname === Routes.FRIENDS) {
      FRIENDS = obj.FRIENDS;
    }
    cResult[0] = _location;
    cResult[1] = FRIENDS;
    let tmp3 = FRIENDS;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  const obj = _mod4591;
  let FRIENDS;
  if (obj.useLocation().pathname === Routes.FRIENDS) {
    FRIENDS = obj.FRIENDS;
  }
  return FRIENDS;
});
