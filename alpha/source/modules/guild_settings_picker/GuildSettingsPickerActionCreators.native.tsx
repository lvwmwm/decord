// Module ID: 16363
// Function ID: 16364
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5546, 16364, 2121, 2]
// Exports: openGuildSettingsPickerModal

// Module 16363 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16364, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
