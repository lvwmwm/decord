// Module ID: 12244
// Function ID: 95699
// Dependencies: [4098, 12245, 1934, 2]

// Module 12244
const result = require("maybeLoadBundle").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4098);
    obj = { href };
    obj.openLazy(require(1934) /* maybeLoadBundle */(12245, dependencyMap.paths), "suspicious-download", obj);
  }
};
