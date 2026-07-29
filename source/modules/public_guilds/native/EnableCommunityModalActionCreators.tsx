// Module ID: 16501
// Function ID: 16502
// Dependencies: [4395, 16502, 1959, 2]

// Module 16501
const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(16502, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    importDefault(4395).popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};
