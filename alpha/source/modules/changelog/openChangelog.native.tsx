// Module ID: 17079
// Function ID: 17080
// Name: openChangelog
// Dependencies: [2097, 4688, 5032, 15069, 1980, 2]
// Exports: openChangelog

// Module 17079 (openChangelog)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ChangelogConstants from "ChangelogConstants" /* 2097 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4688 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import size from "module_2" /* 2 */;

const CHANGELOG_MODAL_KEY = ChangelogConstants.CHANGELOG_MODAL_KEY;
const result = size.fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (!flag) {
    isModalOpenResult = NavigationRouteUtils.isModalOpen();
  }
  if (!isModalOpenResult) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15069, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};
