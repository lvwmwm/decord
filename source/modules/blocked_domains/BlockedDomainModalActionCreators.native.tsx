// Module ID: 12266
// Function ID: 95689
// Dependencies: [4133, 12267, 1935, 2]

// Module 12266
const result = require("maybeLoadBundle").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4133);
    obj = { url };
    obj.openLazy(require(1935) /* maybeLoadBundle */(12267, dependencyMap.paths), "blocked-domain", obj);
  }
};
