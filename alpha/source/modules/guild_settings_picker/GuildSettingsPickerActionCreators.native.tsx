// Module ID: 14829
// Function ID: 14830
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5118, 14830, 2002, 2]
// Exports: openGuildSettingsPickerModal

// Module 14829 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14830, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
