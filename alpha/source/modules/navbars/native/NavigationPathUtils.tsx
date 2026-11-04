// Module ID: 14600
// Function ID: 14601
// Name: NavigationPathUtils
// Dependencies: [1072, 5183, 2]
// Exports: getSelectedSpecialNavigationPath, useSelectedSpecialNavigationPath

// Module 14600 (NavigationPathUtils)
import Constants from "Constants" /* 1072 */;
import MemoryRouter from "MemoryRouter" /* 5183 */;
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
