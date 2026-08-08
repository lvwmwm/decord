// Module ID: 12220
// Function ID: 12221
// Dependencies: [4271, 12221, 1988, 2]

// Module 12220
const result = require("asyncRequireImpl").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4271);
    obj = { href };
    obj.openLazy(require(1988) /* asyncRequireImpl */(12221, dependencyMap.paths), "suspicious-download", obj);
  }
};
