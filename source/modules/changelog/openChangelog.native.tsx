// Module ID: 15874
// Function ID: 121540
// Name: openChangelog
// Dependencies: []
// Exports: openChangelog

// Module 15874 (openChangelog)
const CHANGELOG_MODAL_KEY = require(dependencyMap[0]).CHANGELOG_MODAL_KEY;
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (isModalOpenResult) {
    isModalOpenResult = require(dependencyMap[1]).isModalOpen();
    const obj = require(dependencyMap[1]);
  }
  if (!isModalOpenResult) {
    importDefault(dependencyMap[2]).pushLazy(require(dependencyMap[4])(dependencyMap[3], dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = importDefault(dependencyMap[2]);
  }
};
