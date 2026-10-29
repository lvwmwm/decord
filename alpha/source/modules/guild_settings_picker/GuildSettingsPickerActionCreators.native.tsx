// Module ID: 15631
// Function ID: 15632
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5247, 15632, 2000, 2]
// Exports: openGuildSettingsPickerModal

// Module 15631 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15632, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
