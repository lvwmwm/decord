// Module ID: 16670
// Function ID: 129976
// Dependencies: [653, 587, 2]

// Module 16670
import { TOKEN_KEY } from "ME";

const result = require("set").fileFinishedImporting("modules/headless_tasks/HeadlessTaskUtils.tsx");

export default {
  awaitStorage(arg0) {
    const _require = arg0;
    const Storage = _require(587).Storage;
    Storage.asyncGet(TOKEN_KEY, () => {
      callback();
    });
  }
};
