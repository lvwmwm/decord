// Module ID: 18725
// Function ID: 18726
// Name: openChangelog
// Dependencies: [4871, 5148, 6670, 16864, 2002, 2]
// Exports: openChangelog

// Module 18725 (openChangelog)
import asyncRequire from "asyncRequire" /* 2002 */;
import ChangelogConstants from "ChangelogConstants" /* 4871 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5148 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6670 */;
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
    obj2.pushLazy(asyncRequire(16864, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};
