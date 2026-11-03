// Module ID: 15859
// Function ID: 15860
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5381, 15860, 2123, 2]
// Exports: openGuildSettingsPickerModal

// Module 15859 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15860, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
