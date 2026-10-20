// Module ID: 14934
// Function ID: 14935
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5171, 14935, 2002, 2]
// Exports: openGuildSettingsPickerModal

// Module 14934 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14935, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
