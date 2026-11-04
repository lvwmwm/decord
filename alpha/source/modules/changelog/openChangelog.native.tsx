// Module ID: 19681
// Function ID: 19682
// Name: openChangelog
// Dependencies: [5043, 5322, 6879, 17778, 2123, 2]
// Exports: openChangelog

// Module 19681 (openChangelog)
import asyncRequire from "asyncRequire" /* 2123 */;
import ChangelogConstants from "ChangelogConstants" /* 5043 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5322 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
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
    obj2.pushLazy(asyncRequire(17778, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}
