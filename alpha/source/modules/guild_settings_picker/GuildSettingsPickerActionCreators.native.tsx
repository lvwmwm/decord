// Module ID: 15131
// Function ID: 15132
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5210, 15132, 2002, 2]
// Exports: openGuildSettingsPickerModal

// Module 15131 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15132, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
