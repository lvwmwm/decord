// Module ID: 11795
// Function ID: 91561
// Name: getSelectedSpecialNavigationPath
// Dependencies: [0, 0, 0]
// Exports: useSelectedSpecialNavigationPath

// Module 11795 (getSelectedSpecialNavigationPath)
import { Routes } from "result";
import result from "result";

function getSelectedSpecialNavigationPath(pathname) {
  if (pathname.pathname === Routes.FRIENDS) {
    return obj.FRIENDS;
  }
}
const obj = { FRIENDS: 0, [0]: "FRIENDS" };
result = result.fileFinishedImporting("modules/navbars/native/NavigationPathUtils.tsx");

export const SpecialNavigationPath = obj;
export { getSelectedSpecialNavigationPath };
export const useSelectedSpecialNavigationPath = function useSelectedSpecialNavigationPath() {
  return getSelectedSpecialNavigationPath(require(dependencyMap[1]).useLocation());
};
