// Module ID: 11615
// Function ID: 11616
// Name: openBadgeDirectoryScreen
// Dependencies: [1377, 7208, 6824, 11616, 2118, 2]
// Exports: closeBadgeDirectoryScreen, isBadgeDirectoryIOSPageSheet, openBadgeDirectoryScreen

// Module 11615 (openBadgeDirectoryScreen)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7208);
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
  const tmp4 = asyncRequire(11616, dependencyMap.paths);
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
