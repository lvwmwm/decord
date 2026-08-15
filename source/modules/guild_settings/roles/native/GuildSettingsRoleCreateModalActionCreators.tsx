// Module ID: 16828
// Function ID: 16829
// Dependencies: [5260, 16829, 2007, 2]

// Module 16828
const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(16829, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    importDefault(5260).popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  }
};
