// Module ID: 16302
// Function ID: 127048
// Dependencies: [4337, 16303, 1934, 2]

// Module 16302
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(16303, dependencyMap.paths), undefined, "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY");
  },
  close() {
    importDefault(4337).popWithKey("GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY");
  }
};
