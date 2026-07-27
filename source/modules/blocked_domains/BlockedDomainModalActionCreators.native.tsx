// Module ID: 12223
// Function ID: 95519
// Dependencies: [4099, 12224, 1935, 2]

// Module 12223
const result = require("maybeLoadBundle").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4099);
    obj = { url };
    obj.openLazy(require(1935) /* maybeLoadBundle */(12224, dependencyMap.paths), "blocked-domain", obj);
  }
};
