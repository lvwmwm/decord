// Module ID: 19577
// Function ID: 19578
// Name: openChangelog
// Dependencies: [5043, 5321, 6864, 17682, 2123, 2]
// Exports: openChangelog

// Module 19577 (openChangelog)
import asyncRequire from "asyncRequire" /* 2123 */;
import ChangelogConstants from "ChangelogConstants" /* 5043 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5321 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
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
    obj2.pushLazy(asyncRequire(17682, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}
