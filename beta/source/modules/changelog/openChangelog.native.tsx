// Module ID: 17111
// Function ID: 17112
// Name: openChangelog
// Dependencies: [2098, 4692, 5039, 15095, 1981, 2]
// Exports: openChangelog

// Module 17111 (openChangelog)
import asyncRequire from "asyncRequire" /* 1981 */;
import ChangelogConstants from "ChangelogConstants" /* 2098 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
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
    obj2.pushLazy(asyncRequire(15095, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};
