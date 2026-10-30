// Module ID: 19355
// Function ID: 19356
// Name: openChangelog
// Dependencies: [4911, 5193, 6738, 17466, 1995, 2]
// Exports: openChangelog

// Module 19355 (openChangelog)
import asyncRequire from "asyncRequire" /* 1995 */;
import ChangelogConstants from "ChangelogConstants" /* 4911 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5193 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
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
    obj2.pushLazy(asyncRequire(17466, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}
