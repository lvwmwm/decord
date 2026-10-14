// Module ID: 14489
// Function ID: 14490
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5060, 14490, 2000, 2]
// Exports: openGuildSettingsPickerModal

// Module 14489 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14490, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
