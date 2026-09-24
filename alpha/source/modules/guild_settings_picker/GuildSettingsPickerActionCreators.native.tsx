// Module ID: 14254
// Function ID: 14255
// Name: GuildSettingsPickerActionCreators
// Dependencies: [4796, 14255, 1980, 2]
// Exports: openGuildSettingsPickerModal

// Module 14254 (GuildSettingsPickerActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14255, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
