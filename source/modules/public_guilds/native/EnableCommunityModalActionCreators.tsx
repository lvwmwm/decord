// Module ID: 16882
// Function ID: 16883
// Dependencies: [5260, 16883, 2007, 2]

// Module 16882
const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(16883, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    importDefault(5260).popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};
