// Module ID: 12290
// Function ID: 12291
// Dependencies: [4312, 12291, 2007, 2]

// Module 12290
const result = require("asyncRequireImpl").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4312);
    obj = { url };
    obj.openLazy(require(2007) /* asyncRequireImpl */(12291, dependencyMap.paths), "blocked-domain", obj);
  }
};
