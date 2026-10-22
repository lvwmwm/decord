// Module ID: 15070
// Function ID: 15071
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5196, 15071, 2002, 2]
// Exports: openGuildSettingsPickerModal

// Module 15070 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15071, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
