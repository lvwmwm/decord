// Module ID: 14156
// Function ID: 14157
// Name: GuildSettingsPickerActionCreators
// Dependencies: [4723, 14157, 1980, 2]
// Exports: openGuildSettingsPickerModal

// Module 14156 (GuildSettingsPickerActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14157, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
