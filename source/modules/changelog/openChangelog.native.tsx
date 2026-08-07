// Module ID: 16312
// Function ID: 16313
// Name: openChangelog
// Dependencies: [1959, 4152, 4507, 14656, 1988, 2]
// Exports: openChangelog

// Module 16312 (openChangelog)
import { CHANGELOG_MODAL_KEY } from "CHANGELOG_MODAL_KEY";

const result = require("module_4507").fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (!flag) {
    isModalOpenResult = require(4152) /* navigationToRootTabHelper */.isModalOpen();
    const obj = require(4152) /* navigationToRootTabHelper */;
  }
  if (!isModalOpenResult) {
    importDefault(4507).pushLazy(require(1988) /* asyncRequireImpl */(14656, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = importDefault(4507);
  }
};
