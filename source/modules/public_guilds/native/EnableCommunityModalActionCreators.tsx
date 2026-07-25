// Module ID: 16414
// Function ID: 128173
// Dependencies: [4338, 16415, 1935, 2]

// Module 16414
const result = require("maybeLoadBundle").fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(16415, dependencyMap.paths), undefined, "ENABLED_COMMUNITY_MODAL_KEY");
  },
  close() {
    importDefault(4338).popWithKey("ENABLED_COMMUNITY_MODAL_KEY");
  }
};
