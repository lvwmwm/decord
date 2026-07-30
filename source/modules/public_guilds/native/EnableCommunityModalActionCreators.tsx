// Module ID: 16495
// Function ID: 16496
// Dependencies: [4395, 16496, 1959, 2]

// Module 16495
const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(16496, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    importDefault(4395).popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};
