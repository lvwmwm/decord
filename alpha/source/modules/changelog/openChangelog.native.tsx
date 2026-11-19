// Module ID: 19510
// Function ID: 19511
// Name: openChangelog
// Dependencies: [4694, 4968, 6308, 17014, 2121, 2]
// Exports: openChangelog

// Module 19510 (openChangelog)
import asyncRequire from "asyncRequire" /* 2121 */;
import ChangelogConstants from "ChangelogConstants" /* 4694 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4968 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
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
    obj2.pushLazy(asyncRequire(17014, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}
