// Module ID: 12135
// Function ID: 12136
// Dependencies: [4253, 12136, 1959, 2]

// Module 12135
const result = require("asyncRequireImpl").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4253);
    obj = { url };
    obj.openLazy(require(1959) /* asyncRequireImpl */(12136, dependencyMap.paths), "blocked-domain", obj);
  }
};
