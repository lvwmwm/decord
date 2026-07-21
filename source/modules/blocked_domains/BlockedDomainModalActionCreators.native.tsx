// Module ID: 12101
// Function ID: 93288
// Dependencies: []

// Module 12101
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(dependencyMap[0]);
    obj = { url };
    obj.openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "blocked-domain", obj);
  }
};
