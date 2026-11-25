// Module ID: 19612
// Function ID: 19613
// Name: openChangelog
// Dependencies: [4914, 5188, 6099, 17114, 2119, 2]
// Exports: openChangelog

// Module 19612 (openChangelog)
import asyncRequire from "asyncRequire" /* 2119 */;
import ChangelogConstants from "ChangelogConstants" /* 4914 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5188 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
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
    obj2.pushLazy(asyncRequire(17114, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}
