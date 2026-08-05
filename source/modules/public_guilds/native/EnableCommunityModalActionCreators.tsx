// Module ID: 16602
// Function ID: 16603
// Dependencies: [4460, 16603, 1959, 2]

// Module 16602
const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    importDefault(4460).pushLazy(require(1959) /* asyncRequireImpl */(16603, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    importDefault(4460).popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};
