// Module ID: 12308
// Function ID: 12309
// Dependencies: [4161, 12309, 1959, 2]

// Module 12308
const result = require("asyncRequireImpl").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4161);
    obj = { url };
    obj.openLazy(require(1959) /* asyncRequireImpl */(12309, dependencyMap.paths), "blocked-domain", obj);
  }
};
