// Module ID: 16389
// Function ID: 16390
// Name: openChangelog
// Dependencies: [1959, 4158, 4509, 14726, 1988, 2]
// Exports: openChangelog

// Module 16389 (openChangelog)
import { CHANGELOG_MODAL_KEY } from "CHANGELOG_MODAL_KEY";

const result = require("module_4509").fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (!flag) {
    isModalOpenResult = require(4158) /* navigationToRootTabHelper */.isModalOpen();
    const obj = require(4158) /* navigationToRootTabHelper */;
  }
  if (!isModalOpenResult) {
    importDefault(4509).pushLazy(require(1988) /* asyncRequireImpl */(14726, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = importDefault(4509);
  }
};
