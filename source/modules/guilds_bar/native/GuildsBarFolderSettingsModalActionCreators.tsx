// Module ID: 16212
// Function ID: 16213
// Name: showGuildsBarFolderModal
// Dependencies: [4731, 16213, 2008, 2]
// Exports: hideGuildsBarFolderModal, showGuildsBarFolderModal

// Module 16212 (showGuildsBarFolderModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;

const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = set.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(closure_0) {
  let obj = _modDef4731;
  obj = { folderId: closure_0 };
  obj.pushLazy(asyncRequireImpl(16213, dependencyMap.paths), obj, GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  _modDef4731.popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
