// Module ID: 10655
// Function ID: 10656
// Name: openBadgeDirectoryScreen
// Dependencies: [5039, 10656, 1981, 2]
// Exports: closeBadgeDirectoryScreen, openBadgeDirectoryScreen

// Module 10655 (openBadgeDirectoryScreen)
import asyncRequire from "asyncRequire" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import size from "module_2" /* 2 */;

let c3 = "badge-directory";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDirectoryScreen.tsx");

export const BADGE_DIRECTORY_MODAL_KEY = "badge-directory";
export const openBadgeDirectoryScreen = function openBadgeDirectoryScreen(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const targetUserId = obj.targetUserId;
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10656, dependencyMap.paths), { targetUserId }, c3);
};
export const closeBadgeDirectoryScreen = function closeBadgeDirectoryScreen() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
};
