// Module ID: 6945
// Function ID: 55536
// Name: frozen
// Dependencies: [587, 2]

// Module 6945 (frozen)
const frozen = Object.freeze({
  getItem(arg0) {
    const Storage = require(587) /* Storage */.Storage;
    const value = Storage.get(arg0);
    let tmp2 = null;
    if (null != value) {
      tmp2 = value;
    }
    return tmp2;
  },
  setItem(arg0, arg1) {
    const Storage = require(587) /* Storage */.Storage;
    return Storage.set(arg0, arg1);
  },
  removeItem(arg0) {
    const Storage = require(587) /* Storage */.Storage;
    return Storage.remove(arg0);
  }
});
const result = require("set").fileFinishedImporting("modules/zustand/LocalStorageWrapper.tsx");

export default frozen;
