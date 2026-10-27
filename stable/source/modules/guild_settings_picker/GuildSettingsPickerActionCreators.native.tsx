// Module ID: 14902
// Function ID: 14903
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5155, 14903, 2002, 2]
// Exports: openGuildSettingsPickerModal

// Module 14902 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14903, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
