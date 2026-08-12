// Module ID: 16818
// Function ID: 16819
// Dependencies: [4549, 16819, 2007, 2]

// Module 16818
const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(16819, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    importDefault(4549).popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};
