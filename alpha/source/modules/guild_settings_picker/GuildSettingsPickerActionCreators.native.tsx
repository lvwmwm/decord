// Module ID: 15303
// Function ID: 15304
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5257, 15304, 2120, 2]
// Exports: openGuildSettingsPickerModal

// Module 15303 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15304, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
