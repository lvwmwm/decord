// Module ID: 11464
// Function ID: 11465
// Name: openBadgeDirectoryScreen
// Dependencies: [4960, 11465, 1980, 2]
// Exports: closeBadgeDirectoryScreen, openBadgeDirectoryScreen

// Module 11464 (openBadgeDirectoryScreen)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4960 */;
import size from "module_2" /* 2 */;

let c3 = "badge-directory";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDirectoryScreen.tsx");

export const BADGE_DIRECTORY_MODAL_KEY = "badge-directory";
export const openBadgeDirectoryScreen = function openBadgeDirectoryScreen(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11465, dependencyMap.paths), { targetUserId: obj.targetUserId }, c3);
};
export const closeBadgeDirectoryScreen = function closeBadgeDirectoryScreen() {
  ModalActionCreatorsDefault.popWithKey(c3);
};
