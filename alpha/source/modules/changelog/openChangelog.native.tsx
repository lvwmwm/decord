// Module ID: 17830
// Function ID: 17831
// Name: openChangelog
// Dependencies: [2095, 4684, 5030, 15885, 1980, 2]
// Exports: openChangelog

// Module 17830 (openChangelog)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ChangelogConstants from "ChangelogConstants" /* 2095 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4684 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5030 */;
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
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15885, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};
