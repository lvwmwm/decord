// Module ID: 15671
// Function ID: 15672
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5253, 15672, 1995, 2]
// Exports: openGuildSettingsPickerModal

// Module 15671 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15672, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
