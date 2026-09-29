// Module ID: 14186
// Function ID: 14187
// Name: GuildSettingsPickerActionCreators
// Dependencies: [4755, 14187, 1980, 2]
// Exports: openGuildSettingsPickerModal

// Module 14186 (GuildSettingsPickerActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14187, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
