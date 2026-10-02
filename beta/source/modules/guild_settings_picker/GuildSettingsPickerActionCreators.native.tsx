// Module ID: 13434
// Function ID: 13435
// Name: GuildSettingsPickerActionCreators
// Dependencies: [4801, 13435, 1987, 2]
// Exports: openGuildSettingsPickerModal

// Module 13434 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13435, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
