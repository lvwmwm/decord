// Module ID: 15030
// Function ID: 15031
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5037, 15031, 2121, 2]
// Exports: openGuildSettingsPickerModal

// Module 15030 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15031, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
