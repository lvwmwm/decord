// Module ID: 16836
// Function ID: 16837
// Dependencies: [4572, 16837, 2007, 2]

// Module 16836
const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(16837, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    importDefault(4572).popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};
