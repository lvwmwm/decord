// Module ID: 12280
// Function ID: 12281
// Dependencies: [4157, 12281, 1959, 2]

// Module 12280
const result = require("asyncRequireImpl").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4157);
    obj = { href };
    obj.openLazy(require(1959) /* asyncRequireImpl */(12281, dependencyMap.paths), "suspicious-download", obj);
  }
};
