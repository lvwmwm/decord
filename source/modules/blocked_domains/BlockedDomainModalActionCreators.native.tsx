// Module ID: 12155
// Function ID: 12156
// Dependencies: [4270, 12156, 1988, 2]

// Module 12155
const result = require("asyncRequireImpl").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4270);
    obj = { url };
    obj.openLazy(require(1988) /* asyncRequireImpl */(12156, dependencyMap.paths), "blocked-domain", obj);
  }
};
