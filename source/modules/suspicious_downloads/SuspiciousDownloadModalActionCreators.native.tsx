// Module ID: 12290
// Function ID: 12291
// Dependencies: [4310, 12291, 2007, 2]

// Module 12290
const result = require("asyncRequireImpl").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4310);
    obj = { href };
    obj.openLazy(require(2007) /* asyncRequireImpl */(12291, dependencyMap.paths), "suspicious-download", obj);
  }
};
