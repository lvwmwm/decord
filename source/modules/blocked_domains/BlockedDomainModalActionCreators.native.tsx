// Module ID: 12227
// Function ID: 12228
// Dependencies: [4271, 12228, 2007, 2]

// Module 12227
const result = require("asyncRequireImpl").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4271);
    obj = { url };
    obj.openLazy(require(2007) /* asyncRequireImpl */(12228, dependencyMap.paths), "blocked-domain", obj);
  }
};
