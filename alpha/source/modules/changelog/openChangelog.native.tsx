// Module ID: 19514
// Function ID: 19515
// Name: openChangelog
// Dependencies: [4725, 4999, 6337, 17021, 2121, 2]
// Exports: openChangelog

// Module 19514 (openChangelog)
import asyncRequire from "asyncRequire" /* 2121 */;
import ChangelogConstants from "ChangelogConstants" /* 4725 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6337 */;
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
    obj2.pushLazy(asyncRequire(17021, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
}
