// Module ID: 12153
// Function ID: 12154
// Dependencies: [4270, 12154, 1988, 2]

// Module 12153
const result = require("asyncRequireImpl").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4270);
    obj = { href };
    obj.openLazy(require(1988) /* asyncRequireImpl */(12154, dependencyMap.paths), "suspicious-download", obj);
  }
};
