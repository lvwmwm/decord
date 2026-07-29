// Module ID: 14945
// Function ID: 14946
// Name: showGuildsBarFolderModal
// Dependencies: [4395, 14946, 1959, 2]
// Exports: hideGuildsBarFolderModal, showGuildsBarFolderModal

// Module 14945 (showGuildsBarFolderModal)
const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(closure_0) {
  let obj = importDefault(4395);
  obj = { folderId: closure_0 };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(14946, dependencyMap.paths), obj, GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  importDefault(4395).popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
