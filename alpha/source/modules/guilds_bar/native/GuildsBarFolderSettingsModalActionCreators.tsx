// Module ID: 18249
// Function ID: 18250
// Name: GuildsBarFolderSettingsModalActionCreators
// Dependencies: [6731, 18250, 2000, 2]
// Exports: hideGuildsBarFolderModal, showGuildsBarFolderModal

// Module 18249 (GuildsBarFolderSettingsModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import size from "module_2" /* 2 */;

const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export function showGuildsBarFolderModal(folderId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { folderId };
  obj.pushLazy(asyncRequire(18250, dependencyMap.paths), obj2, GUILD_FOLDER_SETTINGS_MODAL_KEY);
}
export function hideGuildsBarFolderModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
}
