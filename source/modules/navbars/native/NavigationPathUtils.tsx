// Module ID: 11849
// Function ID: 91822
// Name: getSelectedSpecialNavigationPath
// Dependencies: [653, 3993, 2]
// Exports: useSelectedSpecialNavigationPath

// Module 11849 (getSelectedSpecialNavigationPath)
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
  return getSelectedSpecialNavigationPath(require(3993) /* _extends */.useLocation());
};
