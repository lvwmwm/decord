// Module ID: 17763
// Function ID: 17764
// Name: openChangelog
// Dependencies: [2098, 4648, 4993, 15818, 1984, 2]
// Exports: openChangelog

// Module 17763 (openChangelog)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ChangelogConstants from "ChangelogConstants" /* 2098 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4648 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
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
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15818, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};
