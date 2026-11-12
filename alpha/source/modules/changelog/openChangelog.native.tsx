// Module ID: 20034
// Function ID: 20035
// Name: openChangelog
// Dependencies: [5145, 5429, 6785, 18054, 2118, 2]
// Exports: openChangelog

// Module 20034 (openChangelog)
import asyncRequire from "asyncRequire" /* 2118 */;
import ChangelogConstants from "ChangelogConstants" /* 5145 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5429 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import size from "module_2" /* 2 */;

const CHANGELOG_MODAL_KEY = ChangelogConstants.CHANGELOG_MODAL_KEY;
const result = size.fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export function openChangelog() {
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
    obj2.pushLazy(asyncRequire(18054, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}
