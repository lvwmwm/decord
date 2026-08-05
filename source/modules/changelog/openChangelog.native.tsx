// Module ID: 16246
// Function ID: 16247
// Name: openChangelog
// Dependencies: [1930, 4106, 4460, 14602, 1959, 2]
// Exports: openChangelog

// Module 16246 (openChangelog)
import { CHANGELOG_MODAL_KEY } from "CHANGELOG_MODAL_KEY";

const result = require("module_4460").fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (!flag) {
    isModalOpenResult = require(4106) /* navigationToRootTabHelper */.isModalOpen();
    const obj = require(4106) /* navigationToRootTabHelper */;
  }
  if (!isModalOpenResult) {
    importDefault(4460).pushLazy(require(1959) /* asyncRequireImpl */(14602, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = importDefault(4460);
  }
};
