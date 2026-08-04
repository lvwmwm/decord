// Module ID: 12132
// Function ID: 12133
// Dependencies: [4253, 12133, 1959, 2]

// Module 12132
const result = require("asyncRequireImpl").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4253);
    obj = { href };
    obj.openLazy(require(1959) /* asyncRequireImpl */(12133, dependencyMap.paths), "suspicious-download", obj);
  }
};
