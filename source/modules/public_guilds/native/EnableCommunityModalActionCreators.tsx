// Module ID: 16403
// Function ID: 128005
// Dependencies: [4337, 16404, 1934, 2]

// Module 16403
const result = require("maybeLoadBundle").fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(16404, dependencyMap.paths), undefined, "ENABLED_COMMUNITY_MODAL_KEY");
  },
  close() {
    importDefault(4337).popWithKey("ENABLED_COMMUNITY_MODAL_KEY");
  }
};
