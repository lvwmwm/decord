// Module ID: 16748
// Function ID: 16749
// Dependencies: [4509, 16749, 1988, 2]

// Module 16748
const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    importDefault(4509).pushLazy(require(1988) /* asyncRequireImpl */(16749, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    importDefault(4509).popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};
