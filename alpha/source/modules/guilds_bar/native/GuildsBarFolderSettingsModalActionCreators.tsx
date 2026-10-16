// Module ID: 17372
// Function ID: 17373
// Name: GuildsBarFolderSettingsModalActionCreators
// Dependencies: [6153, 17373, 2002, 2]
// Exports: hideGuildsBarFolderModal, showGuildsBarFolderModal

// Module 17372 (GuildsBarFolderSettingsModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6153 */;
import size from "module_2" /* 2 */;

const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(folderId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { folderId };
  obj.pushLazy(asyncRequire(17373, dependencyMap.paths), obj2, GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
