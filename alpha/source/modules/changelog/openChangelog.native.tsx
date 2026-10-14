// Module ID: 18104
// Function ID: 18105
// Name: openChangelog
// Dependencies: [2115, 4978, 5939, 16194, 2000, 2]
// Exports: openChangelog

// Module 18104 (openChangelog)
import asyncRequire from "asyncRequire" /* 2000 */;
import ChangelogConstants from "ChangelogConstants" /* 2115 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4978 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5939 */;
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
    obj2.pushLazy(asyncRequire(16194, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};
