// Module ID: 16015
// Function ID: 16016
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5374, 16016, 2118, 2]
// Exports: openGuildSettingsPickerModal

// Module 16015 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16016, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
