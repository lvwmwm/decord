// Module ID: 12221
// Function ID: 95513
// Dependencies: [4099, 12222, 1935, 2]

// Module 12221
const result = require("maybeLoadBundle").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4099);
    obj = { href };
    obj.openLazy(require(1935) /* maybeLoadBundle */(12222, dependencyMap.paths), "suspicious-download", obj);
  }
};
