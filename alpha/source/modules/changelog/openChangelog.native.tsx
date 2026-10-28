// Module ID: 19059
// Function ID: 19060
// Name: openChangelog
// Dependencies: [4906, 5186, 6707, 17173, 1999, 2]
// Exports: openChangelog

// Module 19059 (openChangelog)
import asyncRequire from "asyncRequire" /* 1999 */;
import ChangelogConstants from "ChangelogConstants" /* 4906 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5186 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
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
    obj2.pushLazy(asyncRequire(17173, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};
