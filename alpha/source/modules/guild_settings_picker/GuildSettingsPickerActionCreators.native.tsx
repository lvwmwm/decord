// Module ID: 13601
// Function ID: 13602
// Name: GuildSettingsPickerActionCreators
// Dependencies: [4800, 13602, 1981, 2]
// Exports: openGuildSettingsPickerModal

// Module 13601 (GuildSettingsPickerActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13602, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
