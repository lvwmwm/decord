// Module ID: 12288
// Function ID: 12289
// Dependencies: [4312, 12289, 2007, 2]

// Module 12288
const result = require("asyncRequireImpl").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4312);
    obj = { href };
    obj.openLazy(require(2007) /* asyncRequireImpl */(12289, dependencyMap.paths), "suspicious-download", obj);
  }
};
