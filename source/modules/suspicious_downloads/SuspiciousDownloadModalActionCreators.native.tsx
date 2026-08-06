// Module ID: 12138
// Function ID: 12139
// Dependencies: [4253, 12139, 1988, 2]

// Module 12138
const result = require("asyncRequireImpl").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4253);
    obj = { href };
    obj.openLazy(require(1988) /* asyncRequireImpl */(12139, dependencyMap.paths), "suspicious-download", obj);
  }
};
