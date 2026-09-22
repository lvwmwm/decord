// Module ID: 13976
// Function ID: 13977
// Name: GuildSettingsPickerActionCreators
// Dependencies: [4603, 13977, 1896, 2]
// Exports: openGuildSettingsPickerModal

// Module 13976 (GuildSettingsPickerActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13977, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
