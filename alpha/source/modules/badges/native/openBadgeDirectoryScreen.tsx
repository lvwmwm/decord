// Module ID: 10820
// Function ID: 10821
// Name: openBadgeDirectoryScreen
// Dependencies: [1384, 6851, 6153, 10821, 2002, 2]
// Exports: closeBadgeDirectoryScreen, isBadgeDirectoryIOSPageSheet, openBadgeDirectoryScreen

// Module 10820 (openBadgeDirectoryScreen)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6153 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(6851);
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
  const tmp4 = asyncRequire(10821, dependencyMap.paths);
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
