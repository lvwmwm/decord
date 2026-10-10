// Module ID: 14092
// Function ID: 14093
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5056, 14093, 2000, 2]
// Exports: openGuildSettingsPickerModal

// Module 14092 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14093, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
