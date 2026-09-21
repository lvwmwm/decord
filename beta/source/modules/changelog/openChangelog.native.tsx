// Module ID: 17752
// Function ID: 17753
// Name: openChangelog
// Dependencies: [2098, 4616, 4961, 15808, 1984, 2]
// Exports: openChangelog

// Module 17752 (openChangelog)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ChangelogConstants from "ChangelogConstants" /* 2098 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4616 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
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
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15808, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};
