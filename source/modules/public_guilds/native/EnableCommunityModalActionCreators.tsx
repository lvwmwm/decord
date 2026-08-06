// Module ID: 16642
// Function ID: 16643
// Dependencies: [4490, 16643, 1988, 2]

// Module 16642
const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(16643, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    importDefault(4490).popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};
