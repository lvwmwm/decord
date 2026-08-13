// Module ID: 16820
// Function ID: 16821
// Dependencies: [4550, 16821, 2007, 2]

// Module 16820
const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(16821, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    importDefault(4550).popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};
