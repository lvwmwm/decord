// Module ID: 12291
// Function ID: 12292
// Dependencies: [4310, 12292, 2007, 2]

// Module 12291
const result = require("asyncRequireImpl").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4310);
    obj = { href };
    obj.openLazy(require(2007) /* asyncRequireImpl */(12292, dependencyMap.paths), "suspicious-download", obj);
  }
};
