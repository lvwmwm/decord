// Module ID: 19540
// Function ID: 19541
// Name: HeadlessTaskUtils
// Dependencies: [1084, 510, 2]

// Module 19540 (HeadlessTaskUtils)
import Storage2 from "Storage" /* 510 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

const TOKEN_KEY = Constants.TOKEN_KEY;
const obj = {
  awaitStorage(arg0) {
    let closure_0 = arg0;
    const Storage = Storage2.Storage;
    Storage.asyncGet(TOKEN_KEY, async () => {
      closure_0();
    });
  }
};
const result = size.fileFinishedImporting("modules/headless_tasks/HeadlessTaskUtils.tsx");

export default obj;
