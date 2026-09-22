// Module ID: 14163
// Function ID: 14164
// Name: GuildSettingsPickerActionCreators
// Dependencies: [4724, 14164, 1980, 2]
// Exports: openGuildSettingsPickerModal

// Module 14163 (GuildSettingsPickerActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14164, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
