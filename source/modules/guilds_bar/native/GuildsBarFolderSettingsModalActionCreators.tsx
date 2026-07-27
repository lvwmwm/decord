// Module ID: 14875
// Function ID: 113499
// Name: showGuildsBarFolderModal
// Dependencies: [4338, 14876, 1935, 2]
// Exports: hideGuildsBarFolderModal, showGuildsBarFolderModal

// Module 14875 (showGuildsBarFolderModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(folderId) {
  let obj = importDefault(4338);
  obj = { folderId };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(14876, dependencyMap.paths), obj, "GUILD_FOLDER_SETTINGS_MODAL_KEY");
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  importDefault(4338).popWithKey("GUILD_FOLDER_SETTINGS_MODAL_KEY");
};
