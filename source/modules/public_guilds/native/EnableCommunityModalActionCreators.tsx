// Module ID: 16622
// Function ID: 16623
// Dependencies: [4490, 16623, 1959, 2]

// Module 16622
const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    importDefault(4490).pushLazy(require(1959) /* asyncRequireImpl */(16623, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    importDefault(4490).popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};
