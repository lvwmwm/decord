// Module ID: 14196
// Function ID: 14197
// Name: GuildSettingsPickerActionCreators
// Dependencies: [4757, 14197, 1984, 2]
// Exports: openGuildSettingsPickerModal

// Module 14196 (GuildSettingsPickerActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14197, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
