// Module ID: 12286
// Function ID: 12287
// Dependencies: [4157, 12287, 1959, 2]

// Module 12286
const result = require("asyncRequireImpl").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4157);
    obj = { href };
    obj.openLazy(require(1959) /* asyncRequireImpl */(12287, dependencyMap.paths), "suspicious-download", obj);
  }
};
