// Module ID: 18308
// Function ID: 18309
// Name: GuildsBarFolderSettingsModalActionCreators
// Dependencies: [6738, 18309, 1995, 2]
// Exports: hideGuildsBarFolderModal, showGuildsBarFolderModal

// Module 18308 (GuildsBarFolderSettingsModalActionCreators)
import asyncRequire from "asyncRequire" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import size from "module_2" /* 2 */;

const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export function showGuildsBarFolderModal(folderId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { folderId };
  obj.pushLazy(asyncRequire(18309, dependencyMap.paths), obj2, GUILD_FOLDER_SETTINGS_MODAL_KEY);
}
export function hideGuildsBarFolderModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
}
