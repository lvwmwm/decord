// Module ID: 12306
// Function ID: 12307
// Dependencies: [4161, 12307, 1959, 2]

// Module 12306
const result = require("asyncRequireImpl").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4161);
    obj = { href };
    obj.openLazy(require(1959) /* asyncRequireImpl */(12307, dependencyMap.paths), "suspicious-download", obj);
  }
};
