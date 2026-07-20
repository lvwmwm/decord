// Module ID: 16162
// Function ID: 124741
// Dependencies: []

// Module 16162
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
