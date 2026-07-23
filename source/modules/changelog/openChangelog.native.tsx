// Module ID: 16003
// Function ID: 123800
// Name: openChangelog
// Dependencies: [1905, 3981, 4337, 14375, 1934, 2]
// Exports: openChangelog

// Module 16003 (openChangelog)
import { CHANGELOG_MODAL_KEY } from "CHANGELOG_MODAL_KEY";

const result = require("module_4337").fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (isModalOpenResult) {
    isModalOpenResult = require(3981) /* _createForOfIteratorHelperLoose */.isModalOpen();
    const obj = require(3981) /* _createForOfIteratorHelperLoose */;
  }
  if (!isModalOpenResult) {
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(14375, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = importDefault(4337);
  }
};
