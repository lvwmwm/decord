// Module ID: 15501
// Function ID: 15502
// Name: showGuildsBarFolderModal
// Dependencies: [4572, 15502, 2007, 2]
// Exports: hideGuildsBarFolderModal, showGuildsBarFolderModal

// Module 15501 (showGuildsBarFolderModal)
const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(closure_0) {
  let obj = importDefault(4572);
  obj = { folderId: closure_0 };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(15502, dependencyMap.paths), obj, GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  importDefault(4572).popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
