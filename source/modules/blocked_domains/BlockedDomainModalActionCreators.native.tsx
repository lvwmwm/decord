// Module ID: 12282
// Function ID: 12283
// Dependencies: [4157, 12283, 1959, 2]

// Module 12282
const result = require("asyncRequireImpl").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4157);
    obj = { url };
    obj.openLazy(require(1959) /* asyncRequireImpl */(12283, dependencyMap.paths), "blocked-domain", obj);
  }
};
