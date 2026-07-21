// Module ID: 6892
// Function ID: 54866
// Name: LowDiskTrim
// Dependencies: []

// Module 6892 (LowDiskTrim)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let tmp2 = () => {
  class LowDiskTrim {
    constructor() {
      LowDiskTrim = this;
      tmp = closure_2(this, LowDiskTrim);
      this.isLowDisk = false;
      this.actions = {
        POST_CONNECTION_OPEN() {
              return self.handlePostConnectionOpen();
            }
      };
      addChangeListenerResult = closure_4.addChangeListener(() => self.handleFileSystemStoreChanged());
      return;
    }
  }
  const importDefault = LowDiskTrim;
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
      const isLowDisk = closure_4.isLowDisk;
      let tmp = isLowDisk;
      if (isLowDisk) {
        tmp = self.isLowDisk !== isLowDisk;
      }
      if (tmp) {
        const databaseResult = LowDiskTrim(closure_1[3]).database();
        if (null != databaseResult) {
          databaseResult.incrementalVacuum();
        }
        const obj = LowDiskTrim(closure_1[3]);
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
}();
tmp2 = new tmp2();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/app_database/modules/LowDiskTrim.tsx");

export default tmp2;
