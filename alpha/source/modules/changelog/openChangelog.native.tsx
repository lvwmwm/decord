// Module ID: 20243
// Function ID: 20244
// Name: openChangelog
// Dependencies: [5212, 5486, 6833, 18217, 2121, 2]
// Exports: openChangelog

// Module 20243 (openChangelog)
import asyncRequire from "asyncRequire" /* 2121 */;
import ChangelogConstants from "ChangelogConstants" /* 5212 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5486 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
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
    obj2.pushLazy(asyncRequire(18217, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}
