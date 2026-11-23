// Module ID: 19459
// Function ID: 19460
// Name: openChangelog
// Dependencies: [4815, 5089, 6429, 16961, 2119, 2]
// Exports: openChangelog

// Module 19459 (openChangelog)
import asyncRequire from "asyncRequire" /* 2119 */;
import ChangelogConstants from "ChangelogConstants" /* 4815 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5089 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
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
    obj2.pushLazy(asyncRequire(16961, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}
