// Module ID: 16760
// Function ID: 16761
// Dependencies: [4509, 16761, 2007, 2]

// Module 16760
const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    importDefault(4509).pushLazy(require(2007) /* asyncRequireImpl */(16761, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    importDefault(4509).popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};
