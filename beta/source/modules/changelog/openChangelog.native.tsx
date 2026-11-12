// Module ID: 19856
// Function ID: 19857
// Name: openChangelog
// Dependencies: [5072, 5346, 6831, 17901, 2118, 2]
// Exports: openChangelog

// Module 19856 (openChangelog)
import asyncRequire from "asyncRequire" /* 2118 */;
import ChangelogConstants from "ChangelogConstants" /* 5072 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5346 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
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
    obj2.pushLazy(asyncRequire(17901, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}
