// Module ID: 14898
// Function ID: 14899
// Name: GuildSettingsPickerActionCreators
// Dependencies: [5155, 14899, 2002, 2]
// Exports: openGuildSettingsPickerModal

// Module 14898 (GuildSettingsPickerActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14899, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
