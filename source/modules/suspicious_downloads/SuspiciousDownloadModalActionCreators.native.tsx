// Module ID: 12416
// Function ID: 12417
// Dependencies: [4342, 12417, 2007, 2]

// Module 12416
const result = require("asyncRequireImpl").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4342);
    obj = { href };
    obj.openLazy(require(2007) /* asyncRequireImpl */(12417, dependencyMap.paths), "suspicious-download", obj);
  }
};
