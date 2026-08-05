// Module ID: 12104
// Function ID: 12105
// Dependencies: [4223, 12105, 1959, 2]

// Module 12104
const result = require("asyncRequireImpl").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4223);
    obj = { href };
    obj.openLazy(require(1959) /* asyncRequireImpl */(12105, dependencyMap.paths), "suspicious-download", obj);
  }
};
