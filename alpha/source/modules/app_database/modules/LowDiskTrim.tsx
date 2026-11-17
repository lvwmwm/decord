// Module ID: 8773
// Function ID: 8774
// Name: LowDiskTrim
// Dependencies: [8693, 5188, 2]

// Module 8773 (LowDiskTrim)
import DatabaseDaosDefault from "DatabaseDaos" /* 5188 */;
import FileSystemStore from "FileSystemStore" /* 8693 */;
import size from "module_2" /* 2 */;

class LowDiskTrim {
  constructor() {
    const obj = Object.create(new.target.prototype);
    obj.isLowDisk = false;
    obj.actions = {
      POST_CONNECTION_OPEN() {
        return obj.handlePostConnectionOpen();
      }
    };
    FileSystemStore.addChangeListener(() => obj.handleFileSystemStoreChanged());
    return obj;
  }
  handlePostConnectionOpen() {
    this.isLowDisk = false;
    const result = this.handleFileSystemStoreChanged();
  }
  handleFileSystemStoreChanged() {
    const self = this;
    const isLowDisk = FileSystemStore.isLowDisk;
    const tmp = isLowDisk && self.isLowDisk !== isLowDisk;
    if (tmp) {
      const obj = DatabaseDaosDefault;
      const databaseResult = obj.database();
      if (databaseResult != null) {
        databaseResult.incrementalVacuum();
      }
    }
    self.isLowDisk = isLowDisk;
  }
  resetInMemoryState() {

  }
}
const prototype = LowDiskTrim.prototype;
let obj = Object.create(LowDiskTrim.prototype);
obj.isLowDisk = false;
obj.actions = {
  POST_CONNECTION_OPEN() {
    return obj.handlePostConnectionOpen();
  }
};
FileSystemStore.addChangeListener(() => obj.handleFileSystemStoreChanged());
let result = size.fileFinishedImporting("modules/app_database/modules/LowDiskTrim.tsx");

export default obj;
