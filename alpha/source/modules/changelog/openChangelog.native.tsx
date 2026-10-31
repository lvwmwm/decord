// Module ID: 19412
// Function ID: 19413
// Name: openChangelog
// Dependencies: [4916, 5198, 6744, 17526, 1994, 2]
// Exports: openChangelog

// Module 19412 (openChangelog)
import asyncRequire from "asyncRequire" /* 1994 */;
import ChangelogConstants from "ChangelogConstants" /* 4916 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5198 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
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
    obj2.pushLazy(asyncRequire(17526, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}
