// Module ID: 14701
// Function ID: 110881
// Name: showGuildsBarFolderModal
// Dependencies: [0, 0, 0, 0]
// Exports: hideGuildsBarFolderModal, showGuildsBarFolderModal

// Module 14701 (showGuildsBarFolderModal)
const result = require("__exportStarResult1").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(folderId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { folderId };
  obj.pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), obj, "GUILD_FOLDER_SETTINGS_MODAL_KEY");
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  importDefault(dependencyMap[0]).popWithKey("GUILD_FOLDER_SETTINGS_MODAL_KEY");
};
