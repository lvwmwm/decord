// Module ID: 15124
// Function ID: 15125
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5131, 15125, 2119, 2]
// Exports: openGuildSettingsPickerModal

// Module 15124 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15125, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
