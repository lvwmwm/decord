// Module ID: 11448
// Function ID: 11449
// Name: openBadgeDirectoryScreen
// Dependencies: [4961, 11449, 1984, 2]
// Exports: closeBadgeDirectoryScreen, openBadgeDirectoryScreen

// Module 11448 (openBadgeDirectoryScreen)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import size from "module_2" /* 2 */;

let c3 = "badge-directory";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDirectoryScreen.tsx");

export const BADGE_DIRECTORY_MODAL_KEY = "badge-directory";
export const openBadgeDirectoryScreen = function openBadgeDirectoryScreen(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11449, dependencyMap.paths), { targetUserId: obj.targetUserId }, c3);
};
export const closeBadgeDirectoryScreen = function closeBadgeDirectoryScreen() {
  ModalActionCreatorsDefault.popWithKey(c3);
};
