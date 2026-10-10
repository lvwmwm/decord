// Module ID: 18007
// Function ID: 18008
// Name: openChangelog
// Dependencies: [2115, 4976, 5934, 15821, 2000, 2]
// Exports: openChangelog

// Module 18007 (openChangelog)
import asyncRequire from "asyncRequire" /* 2000 */;
import ChangelogConstants from "ChangelogConstants" /* 2115 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4976 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const CHANGELOG_MODAL_KEY = ChangelogConstants.CHANGELOG_MODAL_KEY;
const result = size.fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (isModalOpenResult) {
    const obj = NavigationRouteUtils;
    isModalOpenResult = obj.isModalOpen();
  }
  if (!isModalOpenResult) {
    const obj2 = ModalActionCreatorsDefault;
    obj2.pushLazy(asyncRequire(15821, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};
