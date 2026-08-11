// Module ID: 16706
// Function ID: 16707
// Dependencies: [4509, 16707, 2007, 2]

// Module 16706
const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    importDefault(4509).pushLazy(require(2007) /* asyncRequireImpl */(16707, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    importDefault(4509).popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  }
};
