// Module ID: 12219
// Function ID: 95465
// Dependencies: [4098, 12220, 1934, 2]

// Module 12219
const result = require("maybeLoadBundle").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4098);
    obj = { url };
    obj.openLazy(require(1934) /* maybeLoadBundle */(12220, dependencyMap.paths), "blocked-domain", obj);
  }
};
