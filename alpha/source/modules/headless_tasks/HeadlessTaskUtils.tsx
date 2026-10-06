// Module ID: 18171
// Function ID: 18172
// Name: HeadlessTaskUtils
// Dependencies: [1085, 510, 2]

// Module 18171 (HeadlessTaskUtils)
import Storage2 from "Storage" /* 510 */;
import Constants from "Constants" /* 1085 */;
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
