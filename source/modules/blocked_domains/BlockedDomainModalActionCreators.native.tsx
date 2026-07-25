// Module ID: 12222
// Function ID: 95514
// Dependencies: [4099, 12223, 1935, 2]

// Module 12222
const result = require("maybeLoadBundle").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4099);
    obj = { url };
    obj.openLazy(require(1935) /* maybeLoadBundle */(12223, dependencyMap.paths), "blocked-domain", obj);
  }
};
