// Module ID: 16466
// Function ID: 128381
// Dependencies: [4372, 16467, 1935, 2]

// Module 16466
const result = require("maybeLoadBundle").fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(16467, dependencyMap.paths), undefined, "ENABLED_COMMUNITY_MODAL_KEY");
  },
  close() {
    importDefault(4372).popWithKey("ENABLED_COMMUNITY_MODAL_KEY");
  }
};
