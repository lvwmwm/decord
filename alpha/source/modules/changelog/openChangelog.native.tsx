// Module ID: 17781
// Function ID: 17782
// Name: openChangelog
// Dependencies: [2114, 4936, 5940, 15646, 1999, 2]
// Exports: openChangelog

// Module 17781 (openChangelog)
import asyncRequire from "asyncRequire" /* 1999 */;
import ChangelogConstants from "ChangelogConstants" /* 2114 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4936 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
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
    obj2.pushLazy(asyncRequire(15646, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};
