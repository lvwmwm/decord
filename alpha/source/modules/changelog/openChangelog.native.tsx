// Module ID: 19818
// Function ID: 19819
// Name: openChangelog
// Dependencies: [5042, 5314, 6799, 17866, 2118, 2]
// Exports: openChangelog

// Module 19818 (openChangelog)
import asyncRequire from "asyncRequire" /* 2118 */;
import ChangelogConstants from "ChangelogConstants" /* 5042 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5314 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
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
    obj2.pushLazy(asyncRequire(17866, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}
