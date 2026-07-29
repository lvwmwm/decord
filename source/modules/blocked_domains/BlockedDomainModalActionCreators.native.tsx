// Module ID: 12288
// Function ID: 12289
// Dependencies: [4157, 12289, 1959, 2]

// Module 12288
const result = require("asyncRequireImpl").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4157);
    obj = { url };
    obj.openLazy(require(1959) /* asyncRequireImpl */(12289, dependencyMap.paths), "blocked-domain", obj);
  }
};
