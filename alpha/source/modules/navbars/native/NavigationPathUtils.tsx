// Module ID: 13731
// Function ID: 13732
// Name: NavigationPathUtils
// Dependencies: [1071, 4957, 2]
// Exports: getSelectedSpecialNavigationPath, useSelectedSpecialNavigationPath

// Module 13731 (NavigationPathUtils)
import Constants from "Constants" /* 1071 */;
import MemoryRouter from "MemoryRouter" /* 4957 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const SpecialNavigationPath = { FRIENDS: 0, [0]: "FRIENDS" };
const result = size.fileFinishedImporting("modules/navbars/native/NavigationPathUtils.tsx");

export { SpecialNavigationPath };
export function getSelectedSpecialNavigationPath(pathname) {
  if (pathname.pathname === Routes.FRIENDS) {
    return obj.FRIENDS;
  }
}
export function useSelectedSpecialNavigationPath() {
  const obj = MemoryRouter;
  let FRIENDS;
  if (obj.useLocation().pathname === Routes.FRIENDS) {
    FRIENDS = obj.FRIENDS;
  }
  return FRIENDS;
}
