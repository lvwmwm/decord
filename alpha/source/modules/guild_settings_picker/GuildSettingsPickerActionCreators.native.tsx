// Module ID: 14037
// Function ID: 14038
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5055, 14038, 2000, 2]
// Exports: openGuildSettingsPickerModal

// Module 14037 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14038, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
