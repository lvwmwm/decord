// Module ID: 12406
// Function ID: 12407
// Dependencies: [4223, 12407, 1959, 2]

// Module 12406
const result = require("asyncRequireImpl").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4223);
    obj = { url };
    obj.openLazy(require(1959) /* asyncRequireImpl */(12407, dependencyMap.paths), "blocked-domain", obj);
  }
};
