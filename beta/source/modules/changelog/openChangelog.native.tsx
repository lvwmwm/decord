// Module ID: 17113
// Function ID: 17114
// Name: openChangelog
// Dependencies: [2101, 4694, 5040, 15083, 1987, 2]
// Exports: openChangelog

// Module 17113 (openChangelog)
import asyncRequire from "asyncRequire" /* 1987 */;
import ChangelogConstants from "ChangelogConstants" /* 2101 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4694 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import size from "module_2" /* 2 */;

const CHANGELOG_MODAL_KEY = ChangelogConstants.CHANGELOG_MODAL_KEY;
const result = size.fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
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
    obj2.pushLazy(asyncRequire(15083, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};
