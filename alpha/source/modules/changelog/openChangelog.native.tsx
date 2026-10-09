// Module ID: 17935
// Function ID: 17936
// Name: openChangelog
// Dependencies: [2114, 4937, 5941, 15759, 2000, 2]
// Exports: openChangelog

// Module 17935 (openChangelog)
import asyncRequire from "asyncRequire" /* 2000 */;
import ChangelogConstants from "ChangelogConstants" /* 2114 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4937 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
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
    obj2.pushLazy(asyncRequire(15759, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};
