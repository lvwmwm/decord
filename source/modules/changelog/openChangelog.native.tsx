// Module ID: 16286
// Function ID: 16287
// Name: openChangelog
// Dependencies: [1959, 4135, 4490, 14640, 1988, 2]
// Exports: openChangelog

// Module 16286 (openChangelog)
import { CHANGELOG_MODAL_KEY } from "CHANGELOG_MODAL_KEY";

const result = require("module_4490").fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (!flag) {
    isModalOpenResult = require(4135) /* navigationToRootTabHelper */.isModalOpen();
    const obj = require(4135) /* navigationToRootTabHelper */;
  }
  if (!isModalOpenResult) {
    importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(14640, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = importDefault(4490);
  }
};
