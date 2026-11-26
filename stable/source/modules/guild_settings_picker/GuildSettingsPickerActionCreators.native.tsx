// Module ID: 16329
// Function ID: 16330
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5542, 16330, 2121, 2]
// Exports: openGuildSettingsPickerModal

// Module 16329 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16330, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
