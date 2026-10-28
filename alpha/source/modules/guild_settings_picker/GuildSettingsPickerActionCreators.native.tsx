// Module ID: 15397
// Function ID: 15398
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5246, 15398, 1999, 2]
// Exports: openGuildSettingsPickerModal

// Module 15397 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15398, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
