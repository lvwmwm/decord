// Module ID: 14952
// Function ID: 14953
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5171, 14953, 2002, 2]
// Exports: openGuildSettingsPickerModal

// Module 14952 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14953, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
