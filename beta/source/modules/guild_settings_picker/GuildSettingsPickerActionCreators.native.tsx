// Module ID: 16025
// Function ID: 16026
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5374, 16026, 2118, 2]
// Exports: openGuildSettingsPickerModal

// Module 16025 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16026, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
