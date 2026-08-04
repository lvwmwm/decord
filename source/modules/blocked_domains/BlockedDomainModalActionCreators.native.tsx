// Module ID: 12134
// Function ID: 12135
// Dependencies: [4253, 12135, 1959, 2]

// Module 12134
const result = require("asyncRequireImpl").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4253);
    obj = { url };
    obj.openLazy(require(1959) /* asyncRequireImpl */(12135, dependencyMap.paths), "blocked-domain", obj);
  }
};
