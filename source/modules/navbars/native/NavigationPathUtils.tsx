// Module ID: 11796
// Function ID: 91574
// Name: getSelectedSpecialNavigationPath
// Dependencies: [0, 0, 0]
// Exports: useSelectedSpecialNavigationPath

// Module 11796 (getSelectedSpecialNavigationPath)
import { Routes } from "__exportStarResult1";

function getSelectedSpecialNavigationPath(pathname) {
  if (pathname.pathname === Routes.FRIENDS) {
    return obj.FRIENDS;
  }
}
const obj = { FRIENDS: 0, [0]: "FRIENDS" };
const result = require("__exportStarResult1").fileFinishedImporting("modules/navbars/native/NavigationPathUtils.tsx");

export const SpecialNavigationPath = obj;
export { getSelectedSpecialNavigationPath };
export const useSelectedSpecialNavigationPath = function useSelectedSpecialNavigationPath() {
  return getSelectedSpecialNavigationPath(require(dependencyMap[1]).useLocation());
};
