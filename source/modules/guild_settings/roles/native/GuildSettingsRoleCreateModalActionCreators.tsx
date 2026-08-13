// Module ID: 16775
// Function ID: 16776
// Dependencies: [4550, 16776, 2007, 2]

// Module 16775
const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(16776, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    importDefault(4550).popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  }
};
