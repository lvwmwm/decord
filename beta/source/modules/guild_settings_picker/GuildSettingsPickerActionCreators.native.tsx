// Module ID: 14159
// Function ID: 14160
// Name: GuildSettingsPickerActionCreators
// Dependencies: [4725, 14160, 1984, 2]
// Exports: openGuildSettingsPickerModal

// Module 14159 (GuildSettingsPickerActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14160, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
