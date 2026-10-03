// Module ID: 13698
// Function ID: 13699
// Name: GuildSettingsPickerActionCreators
// Dependencies: [4854, 13699, 1987, 2]
// Exports: openGuildSettingsPickerModal

// Module 13698 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13699, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
