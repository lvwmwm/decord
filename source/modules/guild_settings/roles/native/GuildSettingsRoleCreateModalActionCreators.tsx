// Module ID: 16169
// Function ID: 124772
// Dependencies: []

// Module 16169
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    importDefault(dependencyMap[0]).pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), undefined, "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY");
  },
  close() {
    importDefault(dependencyMap[0]).popWithKey("GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY");
  }
};
