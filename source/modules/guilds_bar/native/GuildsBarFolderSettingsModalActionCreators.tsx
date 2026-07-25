// Module ID: 14874
// Function ID: 113494
// Name: showGuildsBarFolderModal
// Dependencies: [4338, 14875, 1935, 2]
// Exports: hideGuildsBarFolderModal, showGuildsBarFolderModal

// Module 14874 (showGuildsBarFolderModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(folderId) {
  let obj = importDefault(4338);
  obj = { folderId };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(14875, dependencyMap.paths), obj, "GUILD_FOLDER_SETTINGS_MODAL_KEY");
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  importDefault(4338).popWithKey("GUILD_FOLDER_SETTINGS_MODAL_KEY");
};
