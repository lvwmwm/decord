// Module ID: 12133
// Function ID: 12134
// Dependencies: [4253, 12134, 1959, 2]

// Module 12133
const result = require("asyncRequireImpl").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4253);
    obj = { href };
    obj.openLazy(require(1959) /* asyncRequireImpl */(12134, dependencyMap.paths), "suspicious-download", obj);
  }
};
