// Module ID: 12106
// Function ID: 12107
// Dependencies: [4223, 12107, 1959, 2]

// Module 12106
const result = require("asyncRequireImpl").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4223);
    obj = { url };
    obj.openLazy(require(1959) /* asyncRequireImpl */(12107, dependencyMap.paths), "blocked-domain", obj);
  }
};
