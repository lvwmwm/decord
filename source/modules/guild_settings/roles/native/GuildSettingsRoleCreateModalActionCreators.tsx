// Module ID: 16411
// Function ID: 127743
// Dependencies: [4372, 16412, 1935, 2]

// Module 16411
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(16412, dependencyMap.paths), undefined, "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY");
  },
  close() {
    importDefault(4372).popWithKey("GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY");
  }
};
