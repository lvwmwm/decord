// Module ID: 16356
// Function ID: 127681
// Dependencies: [4337, 16357, 1934, 2]

// Module 16356
const result = require("maybeLoadBundle").fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(16357, dependencyMap.paths), undefined, "ENABLED_COMMUNITY_MODAL_KEY");
  },
  close() {
    importDefault(4337).popWithKey("ENABLED_COMMUNITY_MODAL_KEY");
  }
};
