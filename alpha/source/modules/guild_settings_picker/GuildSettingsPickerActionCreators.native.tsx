// Module ID: 16327
// Function ID: 16328
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5552, 16328, 2121, 2]
// Exports: openGuildSettingsPickerModal

// Module 16327 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16328, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
