// Module ID: 12311
// Function ID: 12312
// Dependencies: [4310, 12312, 2007, 2]

// Module 12311
const result = require("asyncRequireImpl").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4310);
    obj = { url };
    obj.openLazy(require(2007) /* asyncRequireImpl */(12312, dependencyMap.paths), "blocked-domain", obj);
  }
};
