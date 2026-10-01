// Module ID: 7068
// Function ID: 7069
// Name: LowDiskTrim
// Dependencies: [6899, 2074, 2]

// Module 7068 (LowDiskTrim)
import DatabaseDaosDefault from "DatabaseDaos" /* 2074 */;
import FileSystemStore from "FileSystemStore" /* 6899 */;
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
