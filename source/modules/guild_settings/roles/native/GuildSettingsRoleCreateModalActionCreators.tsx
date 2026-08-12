// Module ID: 16764
// Function ID: 16765
// Dependencies: [4549, 16765, 2007, 2]

// Module 16764
const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(16765, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    importDefault(4549).popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  }
};
