// Module ID: 16206
// Function ID: 16207
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5489, 16207, 2118, 2]
// Exports: openGuildSettingsPickerModal

// Module 16206 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16207, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
