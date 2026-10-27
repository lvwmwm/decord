// Module ID: 18807
// Function ID: 18808
// Name: openChangelog
// Dependencies: [4874, 5151, 6673, 16943, 1999, 2]
// Exports: openChangelog

// Module 18807 (openChangelog)
import asyncRequire from "asyncRequire" /* 1999 */;
import ChangelogConstants from "ChangelogConstants" /* 4874 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5151 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
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
    obj2.pushLazy(asyncRequire(16943, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};
