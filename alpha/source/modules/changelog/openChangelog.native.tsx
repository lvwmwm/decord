// Module ID: 19730
// Function ID: 19731
// Name: openChangelog
// Dependencies: [5045, 5324, 6882, 17818, 2123, 2]
// Exports: openChangelog

// Module 19730 (openChangelog)
import asyncRequire from "asyncRequire" /* 2123 */;
import ChangelogConstants from "ChangelogConstants" /* 5045 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5324 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
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
    obj2.pushLazy(asyncRequire(17818, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}
