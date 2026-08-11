// Module ID: 15427
// Function ID: 15428
// Name: showGuildsBarFolderModal
// Dependencies: [4509, 15428, 2007, 2]
// Exports: hideGuildsBarFolderModal, showGuildsBarFolderModal

// Module 15427 (showGuildsBarFolderModal)
const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(closure_0) {
  let obj = importDefault(4509);
  obj = { folderId: closure_0 };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(15428, dependencyMap.paths), obj, GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  importDefault(4509).popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
