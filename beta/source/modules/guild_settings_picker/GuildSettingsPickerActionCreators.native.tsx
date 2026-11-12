// Module ID: 16057
// Function ID: 16058
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5406, 16058, 2118, 2]
// Exports: openGuildSettingsPickerModal

// Module 16057 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16058, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
