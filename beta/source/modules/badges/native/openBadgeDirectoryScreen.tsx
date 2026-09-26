// Module ID: 11489
// Function ID: 11490
// Name: openBadgeDirectoryScreen
// Dependencies: [4991, 11490, 1980, 2]
// Exports: closeBadgeDirectoryScreen, openBadgeDirectoryScreen

// Module 11489 (openBadgeDirectoryScreen)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import size from "module_2" /* 2 */;

let c3 = "badge-directory";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDirectoryScreen.tsx");

export const BADGE_DIRECTORY_MODAL_KEY = "badge-directory";
export const openBadgeDirectoryScreen = function openBadgeDirectoryScreen(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11490, dependencyMap.paths), { targetUserId: obj.targetUserId }, c3);
};
export const closeBadgeDirectoryScreen = function closeBadgeDirectoryScreen() {
  ModalActionCreatorsDefault.popWithKey(c3);
};
