// Module ID: 14816
// Function ID: 113045
// Name: showGuildsBarFolderModal
// Dependencies: [4337, 14817, 1934, 2]
// Exports: hideGuildsBarFolderModal, showGuildsBarFolderModal

// Module 14816 (showGuildsBarFolderModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(folderId) {
  let obj = importDefault(4337);
  obj = { folderId };
  obj.pushLazy(require(1934) /* maybeLoadBundle */(14817, dependencyMap.paths), obj, "GUILD_FOLDER_SETTINGS_MODAL_KEY");
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  importDefault(4337).popWithKey("GUILD_FOLDER_SETTINGS_MODAL_KEY");
};
