// Module ID: 15016
// Function ID: 15017
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5006, 15017, 2121, 2]
// Exports: openGuildSettingsPickerModal

// Module 15016 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15017, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
