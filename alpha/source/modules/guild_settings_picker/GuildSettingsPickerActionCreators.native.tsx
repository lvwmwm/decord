// Module ID: 15026
// Function ID: 15027
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5192, 15027, 2002, 2]
// Exports: openGuildSettingsPickerModal

// Module 15026 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15027, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
