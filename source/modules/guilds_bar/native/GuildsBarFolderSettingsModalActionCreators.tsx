// Module ID: 14919
// Function ID: 113672
// Name: showGuildsBarFolderModal
// Dependencies: [4372, 14920, 1935, 2]
// Exports: hideGuildsBarFolderModal, showGuildsBarFolderModal

// Module 14919 (showGuildsBarFolderModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(folderId) {
  let obj = importDefault(4372);
  obj = { folderId };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(14920, dependencyMap.paths), obj, "GUILD_FOLDER_SETTINGS_MODAL_KEY");
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  importDefault(4372).popWithKey("GUILD_FOLDER_SETTINGS_MODAL_KEY");
};
