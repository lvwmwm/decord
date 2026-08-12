// Module ID: 12186
// Function ID: 12187
// Name: SpecialNavigationPath
// Dependencies: [676, 4178, 2]
// Exports: getSelectedSpecialNavigationPath, useSelectedSpecialNavigationPath

// Module 12186 (SpecialNavigationPath)
import { Routes } from "ME";

let obj = { FRIENDS: 0, [0]: "FRIENDS" };
const result = require("set").fileFinishedImporting("modules/navbars/native/NavigationPathUtils.tsx");

export const SpecialNavigationPath = obj;
export const getSelectedSpecialNavigationPath = function getSelectedSpecialNavigationPath(pathname) {
  if (pathname.pathname === Routes.FRIENDS) {
    return obj.FRIENDS;
  }
};
export const useSelectedSpecialNavigationPath = function useSelectedSpecialNavigationPath() {
  const obj = require(4178) /* _extends */;
  let FRIENDS;
  if (obj.useLocation().pathname === Routes.FRIENDS) {
    FRIENDS = obj.FRIENDS;
  }
  return FRIENDS;
};
