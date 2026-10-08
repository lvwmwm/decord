// Module ID: 13940
// Function ID: 13941
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5054, 13941, 1999, 2]
// Exports: openGuildSettingsPickerModal

// Module 13940 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13941, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
