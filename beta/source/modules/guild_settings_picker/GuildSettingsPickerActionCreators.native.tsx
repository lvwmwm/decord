// Module ID: 13432
// Function ID: 13433
// Name: GuildSettingsPickerActionCreators
// Dependencies: [4800, 13433, 1981, 2]
// Exports: openGuildSettingsPickerModal

// Module 13432 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13433, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
