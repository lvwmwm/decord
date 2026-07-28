// Module ID: 16112
// Function ID: 124493
// Name: openChangelog
// Dependencies: [1906, 4016, 4372, 14481, 1935, 2]
// Exports: openChangelog

// Module 16112 (openChangelog)
import { CHANGELOG_MODAL_KEY } from "CHANGELOG_MODAL_KEY";

const result = require("module_4372").fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (isModalOpenResult) {
    isModalOpenResult = require(4016) /* _createForOfIteratorHelperLoose */.isModalOpen();
    const obj = require(4016) /* _createForOfIteratorHelperLoose */;
  }
  if (!isModalOpenResult) {
    importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(14481, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = importDefault(4372);
  }
};
