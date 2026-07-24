// Module ID: 12246
// Function ID: 95705
// Dependencies: [4098, 12247, 1934, 2]

// Module 12246
const result = require("maybeLoadBundle").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4098);
    obj = { url };
    obj.openLazy(require(1934) /* maybeLoadBundle */(12247, dependencyMap.paths), "blocked-domain", obj);
  }
};
