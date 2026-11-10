// Module ID: 16052
// Function ID: 16053
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5376, 16053, 2118, 2]
// Exports: openGuildSettingsPickerModal

// Module 16052 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16053, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
