// Module ID: 15551
// Function ID: 15552
// Name: showGuildsBarFolderModal
// Dependencies: [5260, 15552, 2007, 2]
// Exports: hideGuildsBarFolderModal, showGuildsBarFolderModal

// Module 15551 (showGuildsBarFolderModal)
const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(closure_0) {
  let obj = importDefault(5260);
  obj = { folderId: closure_0 };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(15552, dependencyMap.paths), obj, GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  importDefault(5260).popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
