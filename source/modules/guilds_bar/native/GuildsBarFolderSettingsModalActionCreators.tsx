// Module ID: 15402
// Function ID: 15403
// Name: showGuildsBarFolderModal
// Dependencies: [4509, 15403, 1988, 2]
// Exports: hideGuildsBarFolderModal, showGuildsBarFolderModal

// Module 15402 (showGuildsBarFolderModal)
const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(closure_0) {
  let obj = importDefault(4509);
  obj = { folderId: closure_0 };
  obj.pushLazy(require(1988) /* asyncRequireImpl */(15403, dependencyMap.paths), obj, GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  importDefault(4509).popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
