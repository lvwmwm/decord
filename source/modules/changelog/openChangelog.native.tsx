// Module ID: 16473
// Function ID: 16474
// Name: openChangelog
// Dependencies: [1978, 4197, 4550, 14796, 2007, 2]
// Exports: openChangelog

// Module 16473 (openChangelog)
import { CHANGELOG_MODAL_KEY } from "CHANGELOG_MODAL_KEY";

const result = require("module_4550").fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (!flag) {
    isModalOpenResult = require(4197) /* coerceMainRoute */.isModalOpen();
    const obj = require(4197) /* coerceMainRoute */;
  }
  if (!isModalOpenResult) {
    importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(14796, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = importDefault(4550);
  }
};
