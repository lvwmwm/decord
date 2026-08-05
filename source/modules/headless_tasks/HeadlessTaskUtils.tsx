// Module ID: 16870
// Function ID: 16871
// Dependencies: [676, 595, 2]

// Module 16870
import { TOKEN_KEY } from "ME";

const result = require("set").fileFinishedImporting("modules/headless_tasks/HeadlessTaskUtils.tsx");

export default {
  awaitStorage(arg0) {
    const _require = arg0;
    const Storage = _require(595).Storage;
    Storage.asyncGet(TOKEN_KEY, () => {
      callback();
    });
  }
};
