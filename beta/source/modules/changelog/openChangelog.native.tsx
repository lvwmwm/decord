// Module ID: 20200
// Function ID: 20201
// Name: openChangelog
// Dependencies: [5208, 5482, 6838, 18178, 2121, 2]
// Exports: openChangelog

// Module 20200 (openChangelog)
import asyncRequire from "asyncRequire" /* 2121 */;
import ChangelogConstants from "ChangelogConstants" /* 5208 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5482 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6838 */;
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
    obj2.pushLazy(asyncRequire(18178, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}
