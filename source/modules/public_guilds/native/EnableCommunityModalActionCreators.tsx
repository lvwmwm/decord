// Module ID: 16239
// Function ID: 125507
// Dependencies: [1979711551, 1996488767, 2063597631, 2080374847]

// Module 16239
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
