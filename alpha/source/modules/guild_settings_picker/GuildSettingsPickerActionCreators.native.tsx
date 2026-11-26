// Module ID: 15296
// Function ID: 15297
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5257, 15297, 2120, 2]
// Exports: openGuildSettingsPickerModal

// Module 15296 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15297, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
