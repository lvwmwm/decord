// Module ID: 16054
// Function ID: 16055
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5406, 16055, 2118, 2]
// Exports: openGuildSettingsPickerModal

// Module 16054 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16055, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
