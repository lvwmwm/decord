// Module ID: 14690
// Function ID: 110804
// Name: showGuildsBarFolderModal
// Dependencies: []
// Exports: hideGuildsBarFolderModal, showGuildsBarFolderModal

// Module 14690 (showGuildsBarFolderModal)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(folderId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { folderId };
  obj.pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), obj, "GUILD_FOLDER_SETTINGS_MODAL_KEY");
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  importDefault(dependencyMap[0]).popWithKey("GUILD_FOLDER_SETTINGS_MODAL_KEY");
};
