// Module ID: 15246
// Function ID: 15247
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5226, 15247, 2119, 2]
// Exports: openGuildSettingsPickerModal

// Module 15246 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15247, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
