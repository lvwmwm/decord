// Module ID: 15327
// Function ID: 15328
// Name: showGuildsBarFolderModal
// Dependencies: [4507, 15328, 1988, 2]
// Exports: hideGuildsBarFolderModal, showGuildsBarFolderModal

// Module 15327 (showGuildsBarFolderModal)
const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(closure_0) {
  let obj = importDefault(4507);
  obj = { folderId: closure_0 };
  obj.pushLazy(require(1988) /* asyncRequireImpl */(15328, dependencyMap.paths), obj, GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  importDefault(4507).popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
