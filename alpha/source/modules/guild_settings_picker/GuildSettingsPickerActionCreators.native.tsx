// Module ID: 13628
// Function ID: 13629
// Name: GuildSettingsPickerActionCreators
// Dependencies: [4830, 13629, 1981, 2]
// Exports: openGuildSettingsPickerModal

// Module 13628 (GuildSettingsPickerActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13629, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
