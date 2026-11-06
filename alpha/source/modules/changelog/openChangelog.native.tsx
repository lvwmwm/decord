// Module ID: 19736
// Function ID: 19737
// Name: openChangelog
// Dependencies: [5072, 5344, 6824, 17806, 2118, 2]
// Exports: openChangelog

// Module 19736 (openChangelog)
import asyncRequire from "asyncRequire" /* 2118 */;
import ChangelogConstants from "ChangelogConstants" /* 5072 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5344 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
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
    obj2.pushLazy(asyncRequire(17806, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}
