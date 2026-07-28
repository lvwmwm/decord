// Module ID: 12264
// Function ID: 95683
// Dependencies: [4133, 12265, 1935, 2]

// Module 12264
const result = require("maybeLoadBundle").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4133);
    obj = { href };
    obj.openLazy(require(1935) /* maybeLoadBundle */(12265, dependencyMap.paths), "suspicious-download", obj);
  }
};
