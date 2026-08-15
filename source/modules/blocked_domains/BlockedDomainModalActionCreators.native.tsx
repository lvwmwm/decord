// Module ID: 12418
// Function ID: 12419
// Dependencies: [4342, 12419, 2007, 2]

// Module 12418
const result = require("asyncRequireImpl").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4342);
    obj = { url };
    obj.openLazy(require(2007) /* asyncRequireImpl */(12419, dependencyMap.paths), "blocked-domain", obj);
  }
};
