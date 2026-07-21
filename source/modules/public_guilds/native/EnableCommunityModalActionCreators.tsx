// Module ID: 16231
// Function ID: 125465
// Dependencies: []

// Module 16231
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    importDefault(dependencyMap[0]).pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), undefined, "ENABLED_COMMUNITY_MODAL_KEY");
  },
  close() {
    importDefault(dependencyMap[0]).popWithKey("ENABLED_COMMUNITY_MODAL_KEY");
  }
};
