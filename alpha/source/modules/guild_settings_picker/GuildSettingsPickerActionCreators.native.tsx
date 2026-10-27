// Module ID: 15172
// Function ID: 15173
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5211, 15173, 1999, 2]
// Exports: openGuildSettingsPickerModal

// Module 15172 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15173, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
