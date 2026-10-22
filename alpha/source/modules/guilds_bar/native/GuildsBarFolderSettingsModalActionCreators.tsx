// Module ID: 17656
// Function ID: 17657
// Name: GuildsBarFolderSettingsModalActionCreators
// Dependencies: [6657, 17657, 2002, 2]
// Exports: hideGuildsBarFolderModal, showGuildsBarFolderModal

// Module 17656 (GuildsBarFolderSettingsModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import size from "module_2" /* 2 */;

const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(folderId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { folderId };
  obj.pushLazy(asyncRequire(17657, dependencyMap.paths), obj2, GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
