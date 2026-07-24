// Module ID: 16349
// Function ID: 127372
// Dependencies: [4337, 16350, 1934, 2]

// Module 16349
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(16350, dependencyMap.paths), undefined, "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY");
  },
  close() {
    importDefault(4337).popWithKey("GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY");
  }
};
