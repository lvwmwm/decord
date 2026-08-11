// Module ID: 12225
// Function ID: 12226
// Dependencies: [4271, 12226, 2007, 2]

// Module 12225
const result = require("asyncRequireImpl").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4271);
    obj = { href };
    obj.openLazy(require(2007) /* asyncRequireImpl */(12226, dependencyMap.paths), "suspicious-download", obj);
  }
};
