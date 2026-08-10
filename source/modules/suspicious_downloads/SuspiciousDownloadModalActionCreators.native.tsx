// Module ID: 12222
// Function ID: 12223
// Dependencies: [4271, 12223, 1988, 2]

// Module 12222
const result = require("asyncRequireImpl").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4271);
    obj = { href };
    obj.openLazy(require(1988) /* asyncRequireImpl */(12223, dependencyMap.paths), "suspicious-download", obj);
  }
};
