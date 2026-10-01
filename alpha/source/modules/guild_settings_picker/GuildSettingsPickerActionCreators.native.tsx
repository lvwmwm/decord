// Module ID: 13636
// Function ID: 13637
// Name: GuildSettingsPickerActionCreators
// Dependencies: [4809, 13637, 1981, 2]
// Exports: openGuildSettingsPickerModal

// Module 13636 (GuildSettingsPickerActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13637, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
