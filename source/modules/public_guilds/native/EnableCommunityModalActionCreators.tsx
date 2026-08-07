// Module ID: 16662
// Function ID: 16663
// Dependencies: [4507, 16663, 1988, 2]

// Module 16662
const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    importDefault(4507).pushLazy(require(1988) /* asyncRequireImpl */(16663, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    importDefault(4507).popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};
