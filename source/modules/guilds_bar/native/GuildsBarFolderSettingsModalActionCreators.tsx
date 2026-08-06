// Module ID: 15303
// Function ID: 15304
// Name: showGuildsBarFolderModal
// Dependencies: [4490, 15304, 1988, 2]
// Exports: hideGuildsBarFolderModal, showGuildsBarFolderModal

// Module 15303 (showGuildsBarFolderModal)
const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(closure_0) {
  let obj = importDefault(4490);
  obj = { folderId: closure_0 };
  obj.pushLazy(require(1988) /* asyncRequireImpl */(15304, dependencyMap.paths), obj, GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  importDefault(4490).popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
