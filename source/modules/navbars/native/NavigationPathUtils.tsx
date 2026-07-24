// Module ID: 11833
// Function ID: 91861
// Name: getSelectedSpecialNavigationPath
// Dependencies: [653, 3958, 2]
// Exports: useSelectedSpecialNavigationPath

// Module 11833 (getSelectedSpecialNavigationPath)
import { Routes } from "ME";

function getSelectedSpecialNavigationPath(pathname) {
  if (pathname.pathname === Routes.FRIENDS) {
    return obj.FRIENDS;
  }
}
const obj = { FRIENDS: 0, [0]: "FRIENDS" };
const result = require("set").fileFinishedImporting("modules/navbars/native/NavigationPathUtils.tsx");

export const SpecialNavigationPath = obj;
export { getSelectedSpecialNavigationPath };
export const useSelectedSpecialNavigationPath = function useSelectedSpecialNavigationPath() {
  return getSelectedSpecialNavigationPath(require(3958) /* _extends */.useLocation());
};
