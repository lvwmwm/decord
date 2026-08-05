// Module ID: 16548
// Function ID: 16549
// Dependencies: [4460, 16549, 1959, 2]

// Module 16548
const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    importDefault(4460).pushLazy(require(1959) /* asyncRequireImpl */(16549, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    importDefault(4460).popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  }
};
