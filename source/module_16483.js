// Module ID: 16483
// Function ID: 127341
// Dependencies: [131072, 519045120, 31]

// Module 16483
import module_31 from "module_31";

const TOKEN_KEY = require(dependencyMap[0]).TOKEN_KEY;
const result = module_31.fileFinishedImporting("modules/headless_tasks/HeadlessTaskUtils.tsx");

export default {
  awaitStorage(arg0) {
    const require = arg0;
    const Storage = require(dependencyMap[1]).Storage;
    Storage.asyncGet(TOKEN_KEY, () => {
      arg0();
    });
  }
};
