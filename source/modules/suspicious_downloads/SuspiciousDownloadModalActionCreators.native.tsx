// Module ID: 12309
// Function ID: 12310
// Dependencies: [4310, 12310, 2007, 2]

// Module 12309
const result = require("asyncRequireImpl").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4310);
    obj = { href };
    obj.openLazy(require(2007) /* asyncRequireImpl */(12310, dependencyMap.paths), "suspicious-download", obj);
  }
};
