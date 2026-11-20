// Module ID: 14980
// Function ID: 14981
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5008, 14981, 2119, 2]
// Exports: openGuildSettingsPickerModal

// Module 14980 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14981, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
