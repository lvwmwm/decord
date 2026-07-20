// Module ID: 12092
// Function ID: 93247
// Dependencies: []

// Module 12092
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(dependencyMap[0]);
    obj = { href };
    obj.openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "suspicious-download", obj);
  }
};
