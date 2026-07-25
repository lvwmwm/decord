// Module ID: 12220
// Function ID: 95508
// Dependencies: [4099, 12221, 1935, 2]

// Module 12220
const result = require("maybeLoadBundle").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4099);
    obj = { href };
    obj.openLazy(require(1935) /* maybeLoadBundle */(12221, dependencyMap.paths), "suspicious-download", obj);
  }
};
