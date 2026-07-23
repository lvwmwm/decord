// Module ID: 12217
// Function ID: 95459
// Dependencies: [4098, 12218, 1934, 2]

// Module 12217
const result = require("maybeLoadBundle").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4098);
    obj = { href };
    obj.openLazy(require(1934) /* maybeLoadBundle */(12218, dependencyMap.paths), "suspicious-download", obj);
  }
};
