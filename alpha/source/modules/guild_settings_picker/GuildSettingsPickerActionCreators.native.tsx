// Module ID: 15972
// Function ID: 15973
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5384, 15973, 2123, 2]
// Exports: openGuildSettingsPickerModal

// Module 15972 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15973, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
