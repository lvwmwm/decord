// Module ID: 11160
// Function ID: 11161
// Name: openBadgeDirectoryScreen
// Dependencies: [1381, 7074, 6707, 11161, 1999, 2]
// Exports: closeBadgeDirectoryScreen, isBadgeDirectoryIOSPageSheet, openBadgeDirectoryScreen

// Module 11160 (openBadgeDirectoryScreen)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7074);
let c3 = "badge-directory";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDirectoryScreen.tsx");

export const BADGE_DIRECTORY_MODAL_KEY = "badge-directory";
export const isBadgeDirectoryIOSPageSheet = function isBadgeDirectoryIOSPageSheet() {
  const obj = PlatformUtils;
  let isIOSResult = obj.isIOS();
  if (isIOSResult) {
    const tmpResult = useIsWindowLarge;
    isIOSResult = !tmpResult.getIsWindowLarge();
  }
  return isIOSResult;
};
export const openBadgeDirectoryScreen = function openBadgeDirectoryScreen(arg0) {
  let obj4;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const targetUserId = obj.targetUserId;
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  ModalActionCreatorsDefault;
  const obj2 = { targetUserId };
  const tmp4 = asyncRequire(11161, dependencyMap.paths);
  const obj3 = PlatformUtils;
  const tmp5 = c3;
  if (!obj3.isIOS()) {
    obj4 = { presentation: "modal" };
  } else {
    useIsWindowLarge;
  }
  pushLazy(tmp4, obj2, tmp5, obj4);
};
export const closeBadgeDirectoryScreen = function closeBadgeDirectoryScreen() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
};
