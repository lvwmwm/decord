// Module ID: 6941
// Function ID: 55482
// Name: frozen
// Dependencies: []

// Module 6941 (frozen)
const frozen = Object.freeze({
  getItem(arg0) {
    const Storage = require(dependencyMap[0]).Storage;
    const value = Storage.get(arg0);
    let tmp2 = null;
    if (null != value) {
      tmp2 = value;
    }
    return tmp2;
  },
  setItem(arg0, arg1) {
    const Storage = require(dependencyMap[0]).Storage;
    return Storage.set(arg0, arg1);
  },
  removeItem(arg0) {
    const Storage = require(dependencyMap[0]).Storage;
    return Storage.remove(arg0);
  }
});
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/zustand/LocalStorageWrapper.tsx");

export default frozen;
