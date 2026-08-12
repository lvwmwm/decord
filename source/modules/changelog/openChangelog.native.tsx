// Module ID: 16471
// Function ID: 16472
// Name: openChangelog
// Dependencies: [1978, 4199, 4549, 14796, 2007, 2]
// Exports: openChangelog

// Module 16471 (openChangelog)
import { CHANGELOG_MODAL_KEY } from "CHANGELOG_MODAL_KEY";

const result = require("module_4549").fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (!flag) {
    isModalOpenResult = require(4199) /* coerceMainRoute */.isModalOpen();
    const obj = require(4199) /* coerceMainRoute */;
  }
  if (!isModalOpenResult) {
    importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(14796, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = importDefault(4549);
  }
};
