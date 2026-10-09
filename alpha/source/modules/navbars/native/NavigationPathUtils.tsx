// Module ID: 12508
// Function ID: 12509
// Name: NavigationPathUtils
// Dependencies: [1085, 558, 576, 4911, 2]
// Exports: getSelectedSpecialNavigationPath

// Module 12508 (NavigationPathUtils)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import MemoryRouter from "MemoryRouter" /* 4911 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const SpecialNavigationPath = { FRIENDS: 0, [0]: "FRIENDS" };
function getSelectedSpecialNavigationPath(pathname) {
  if (pathname.pathname === Routes.FRIENDS) {
    return obj.FRIENDS;
  }
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectedSpecialNavigationPath() {
  let tmp3;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = MemoryRouter;
  const _location = obj2.useLocation();
  if (cResult[0] !== _location) {
    let FRIENDS;
    if (_location.pathname === Routes.FRIENDS) {
      FRIENDS = obj.FRIENDS;
    }
    cResult[0] = _location;
    cResult[1] = FRIENDS;
    tmp3 = FRIENDS;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function useSelectedSpecialNavigationPath() {
  const obj = MemoryRouter;
  let FRIENDS;
  if (obj.useLocation().pathname === Routes.FRIENDS) {
    FRIENDS = obj.FRIENDS;
  }
  return FRIENDS;
});
const result = size.fileFinishedImporting("modules/navbars/native/NavigationPathUtils.tsx");

export { SpecialNavigationPath };
export { getSelectedSpecialNavigationPath };
export const useSelectedSpecialNavigationPath = tmp2;
