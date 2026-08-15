// Module ID: 16541
// Function ID: 16542
// Name: openChangelog
// Dependencies: [1978, 4229, 5260, 14850, 2007, 2]
// Exports: openChangelog

// Module 16541 (openChangelog)
import { CHANGELOG_MODAL_KEY } from "CHANGELOG_MODAL_KEY";

const result = require("module_5260").fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (!flag) {
    isModalOpenResult = require(4229) /* coerceMainRoute */.isModalOpen();
    const obj = require(4229) /* coerceMainRoute */;
  }
  if (!isModalOpenResult) {
    importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(14850, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = importDefault(5260);
  }
};
