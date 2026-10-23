// Module ID: 15108
// Function ID: 15109
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5208, 15109, 2002, 2]
// Exports: openGuildSettingsPickerModal

// Module 15108 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15109, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
