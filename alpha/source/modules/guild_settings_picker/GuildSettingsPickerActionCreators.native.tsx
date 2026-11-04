// Module ID: 15947
// Function ID: 15948
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5382, 15948, 2123, 2]
// Exports: openGuildSettingsPickerModal

// Module 15947 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15948, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
