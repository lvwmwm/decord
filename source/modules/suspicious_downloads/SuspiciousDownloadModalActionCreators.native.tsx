// Module ID: 12404
// Function ID: 12405
// Dependencies: [4223, 12405, 1959, 2]

// Module 12404
const result = require("asyncRequireImpl").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4223);
    obj = { href };
    obj.openLazy(require(1959) /* asyncRequireImpl */(12405, dependencyMap.paths), "suspicious-download", obj);
  }
};
