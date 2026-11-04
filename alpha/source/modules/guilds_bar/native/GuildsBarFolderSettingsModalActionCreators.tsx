// Module ID: 18618
// Function ID: 18619
// Name: GuildsBarFolderSettingsModalActionCreators
// Dependencies: [6879, 18619, 2123, 2]
// Exports: hideGuildsBarFolderModal, showGuildsBarFolderModal

// Module 18618 (GuildsBarFolderSettingsModalActionCreators)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import size from "module_2" /* 2 */;

const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export function showGuildsBarFolderModal(folderId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { folderId };
  obj.pushLazy(asyncRequire(18619, dependencyMap.paths), obj2, GUILD_FOLDER_SETTINGS_MODAL_KEY);
}
export function hideGuildsBarFolderModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
}
