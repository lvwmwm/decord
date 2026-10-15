// Module ID: 14786
// Function ID: 14787
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5115, 14787, 2000, 2]
// Exports: openGuildSettingsPickerModal

// Module 14786 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14787, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
