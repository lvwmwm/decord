// Module ID: 16372
// Function ID: 127587
// Dependencies: [4338, 16373, 1935, 2]

// Module 16372
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(16373, dependencyMap.paths), undefined, "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY");
  },
  close() {
    importDefault(4338).popWithKey("GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY");
  }
};
