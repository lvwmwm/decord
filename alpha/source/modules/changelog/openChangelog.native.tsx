// Module ID: 19501
// Function ID: 19502
// Name: openChangelog
// Dependencies: [4819, 5093, 6004, 16995, 2119, 2]
// Exports: openChangelog

// Module 19501 (openChangelog)
import asyncRequire from "asyncRequire" /* 2119 */;
import ChangelogConstants from "ChangelogConstants" /* 4819 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5093 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6004 */;
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
    obj2.pushLazy(asyncRequire(16995, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}
