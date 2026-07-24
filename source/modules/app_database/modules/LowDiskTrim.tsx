// Module ID: 6897
// Function ID: 54931
// Name: LowDiskTrim
// Dependencies: [6, 7, 6711, 1882, 2]

// Module 6897 (LowDiskTrim)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let tmp2 = (() => {
  class LowDiskTrim {
    constructor() {
      self = this;
      tmp = outer1_2(this, self);
      this.isLowDisk = false;
      this.actions = {
        POST_CONNECTION_OPEN() {
              return self.handlePostConnectionOpen();
            }
      };
      addChangeListenerResult = outer1_4.addChangeListener(() => self.handleFileSystemStoreChanged());
      return;
    }
  }
  let obj = {
    key: "handlePostConnectionOpen",
    value() {
      this.isLowDisk = false;
      const result = this.handleFileSystemStoreChanged();
    }
  };
  const items = [obj, , ];
  obj = {
    key: "handleFileSystemStoreChanged",
    value() {
      const self = this;
      const isLowDisk = outer1_4.isLowDisk;
      let tmp = isLowDisk;
      if (isLowDisk) {
        tmp = self.isLowDisk !== isLowDisk;
      }
      if (tmp) {
        const databaseResult = LowDiskTrim(outer1_1[3]).database();
        if (null != databaseResult) {
          databaseResult.incrementalVacuum();
        }
        const obj = LowDiskTrim(outer1_1[3]);
      }
      self.isLowDisk = isLowDisk;
    }
  };
  items[1] = obj;
  obj = {
    key: "resetInMemoryState",
    value() {

    }
  };
  items[2] = obj;
  return callback(LowDiskTrim, items);
})();
tmp2 = new tmp2();
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_database/modules/LowDiskTrim.tsx");

export default tmp2;
