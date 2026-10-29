// Module ID: 19292
// Function ID: 19293
// Name: openChangelog
// Dependencies: [4907, 5187, 6731, 17412, 2000, 2]
// Exports: openChangelog

// Module 19292 (openChangelog)
import asyncRequire from "asyncRequire" /* 2000 */;
import ChangelogConstants from "ChangelogConstants" /* 4907 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5187 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
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
    obj2.pushLazy(asyncRequire(17412, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}
