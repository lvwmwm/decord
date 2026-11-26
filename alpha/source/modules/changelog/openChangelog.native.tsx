// Module ID: 19675
// Function ID: 19676
// Name: openChangelog
// Dependencies: [4945, 5219, 6130, 17165, 2120, 2]
// Exports: openChangelog

// Module 19675 (openChangelog)
import asyncRequire from "asyncRequire" /* 2120 */;
import ChangelogConstants from "ChangelogConstants" /* 4945 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5219 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
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
    obj2.pushLazy(asyncRequire(17165, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}
