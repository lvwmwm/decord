// Module ID: 12140
// Function ID: 12141
// Dependencies: [4253, 12141, 1988, 2]

// Module 12140
const result = require("asyncRequireImpl").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4253);
    obj = { url };
    obj.openLazy(require(1988) /* asyncRequireImpl */(12141, dependencyMap.paths), "blocked-domain", obj);
  }
};
