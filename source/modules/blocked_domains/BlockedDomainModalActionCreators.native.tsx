// Module ID: 12224
// Function ID: 12225
// Dependencies: [4271, 12225, 1988, 2]

// Module 12224
const result = require("asyncRequireImpl").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4271);
    obj = { url };
    obj.openLazy(require(1988) /* asyncRequireImpl */(12225, dependencyMap.paths), "blocked-domain", obj);
  }
};
