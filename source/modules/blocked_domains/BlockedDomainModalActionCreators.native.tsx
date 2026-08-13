// Module ID: 12293
// Function ID: 12294
// Dependencies: [4310, 12294, 2007, 2]

// Module 12293
const result = require("asyncRequireImpl").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4310);
    obj = { url };
    obj.openLazy(require(2007) /* asyncRequireImpl */(12294, dependencyMap.paths), "blocked-domain", obj);
  }
};
