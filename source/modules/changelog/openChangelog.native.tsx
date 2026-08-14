// Module ID: 16491
// Function ID: 16492
// Name: openChangelog
// Dependencies: [1978, 4197, 4572, 14810, 2007, 2]
// Exports: openChangelog

// Module 16491 (openChangelog)
import { CHANGELOG_MODAL_KEY } from "CHANGELOG_MODAL_KEY";

const result = require("module_4572").fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

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
    importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(14810, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = importDefault(4572);
  }
};
