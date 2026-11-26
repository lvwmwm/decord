// Module ID: 14012
// Function ID: 14013
// Name: openBadgeDirectoryScreen
// Dependencies: [1378, 7373, 6429, 14013, 2119, 2]
// Exports: closeBadgeDirectoryScreen, isBadgeDirectoryIOSPageSheet, openBadgeDirectoryScreen

// Module 14012 (openBadgeDirectoryScreen)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7373);
let c3 = "badge-directory";
const result = size.fileFinishedImporting("modules/badges/native/openBadgeDirectoryScreen.tsx");

export const BADGE_DIRECTORY_MODAL_KEY = "badge-directory";
export function isBadgeDirectoryIOSPageSheet() {
  const obj = PlatformUtils;
  let isIOSResult = obj.isIOS();
  if (isIOSResult) {
    const tmpResult = useIsWindowLarge;
    isIOSResult = !tmpResult.getIsWindowLarge();
  }
  return isIOSResult;
}
export function openBadgeDirectoryScreen(arg0) {
  let obj4;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const targetUserId = obj.targetUserId;
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  ModalActionCreatorsDefault;
  const obj2 = { targetUserId };
  const tmp4 = asyncRequire(14013, dependencyMap.paths);
  const obj3 = PlatformUtils;
  const tmp5 = c3;
  if (!obj3.isIOS()) {
    obj4 = { presentation: "modal" };
  } else {
    useIsWindowLarge;
  }
  pushLazy(tmp4, obj2, tmp5, obj4);
}
export function closeBadgeDirectoryScreen() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
}
