// Module ID: 16073
// Function ID: 124337
// Name: openChangelog
// Dependencies: [1906, 3982, 4338, 14437, 1935, 2]
// Exports: openChangelog

// Module 16073 (openChangelog)
import { CHANGELOG_MODAL_KEY } from "CHANGELOG_MODAL_KEY";

const result = require("module_4338").fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (isModalOpenResult) {
    isModalOpenResult = require(3982) /* _createForOfIteratorHelperLoose */.isModalOpen();
    const obj = require(3982) /* _createForOfIteratorHelperLoose */;
  }
  if (!isModalOpenResult) {
    importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(14437, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = importDefault(4338);
  }
};
