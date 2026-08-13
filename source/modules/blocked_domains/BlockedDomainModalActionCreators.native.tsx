// Module ID: 12292
// Function ID: 12293
// Dependencies: [4310, 12293, 2007, 2]

// Module 12292
const result = require("asyncRequireImpl").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4310);
    obj = { url };
    obj.openLazy(require(2007) /* asyncRequireImpl */(12293, dependencyMap.paths), "blocked-domain", obj);
  }
};
