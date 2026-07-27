// Module ID: 16426
// Function ID: 128220
// Dependencies: [4338, 16427, 1935, 2]

// Module 16426
const result = require("maybeLoadBundle").fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(16427, dependencyMap.paths), undefined, "ENABLED_COMMUNITY_MODAL_KEY");
  },
  close() {
    importDefault(4338).popWithKey("ENABLED_COMMUNITY_MODAL_KEY");
  }
};
