// Module ID: 14115
// Function ID: 14116
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5056, 14116, 2000, 2]
// Exports: openGuildSettingsPickerModal

// Module 14115 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14116, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
