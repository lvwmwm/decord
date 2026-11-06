// Module ID: 15711
// Function ID: 15712
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5258, 15712, 1994, 2]
// Exports: openGuildSettingsPickerModal

// Module 15711 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15712, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
}
