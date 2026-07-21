// Module ID: 16490
// Function ID: 127375
// Dependencies: []

// Module 16490
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
