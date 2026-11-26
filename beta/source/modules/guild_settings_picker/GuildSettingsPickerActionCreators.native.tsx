// Module ID: 15114
// Function ID: 15115
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5127, 15115, 2119, 2]
// Exports: openGuildSettingsPickerModal

// Module 15114 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15115, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
