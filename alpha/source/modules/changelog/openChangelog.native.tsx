// Module ID: 18457
// Function ID: 18458
// Name: openChangelog
// Dependencies: [2118, 5072, 6190, 16601, 2002, 2]
// Exports: openChangelog

// Module 18457 (openChangelog)
import asyncRequire from "asyncRequire" /* 2002 */;
import ChangelogConstants from "ChangelogConstants" /* 2118 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5072 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
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
    obj2.pushLazy(asyncRequire(16601, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};
