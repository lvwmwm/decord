// Module ID: 16141
// Function ID: 16142
// Name: openChangelog
// Dependencies: [1930, 4040, 4395, 14499, 1959, 2]
// Exports: openChangelog

// Module 16141 (openChangelog)
import { CHANGELOG_MODAL_KEY } from "CHANGELOG_MODAL_KEY";

const result = require("module_4395").fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (!flag) {
    isModalOpenResult = require(4040) /* navigationToRootTabHelper */.isModalOpen();
    const obj = require(4040) /* navigationToRootTabHelper */;
  }
  if (!isModalOpenResult) {
    importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(14499, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = importDefault(4395);
  }
};
