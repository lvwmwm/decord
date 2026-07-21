// Module ID: 16498
// Function ID: 127436
// Dependencies: []

// Module 16498
const TOKEN_KEY = require(dependencyMap[0]).TOKEN_KEY;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/headless_tasks/HeadlessTaskUtils.tsx");

export default {
  awaitStorage(arg0) {
    const require = arg0;
    const Storage = require(dependencyMap[1]).Storage;
    Storage.asyncGet(TOKEN_KEY, () => {
      arg0();
    });
  }
};
