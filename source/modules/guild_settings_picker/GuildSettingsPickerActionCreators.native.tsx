// Module ID: 13541
// Function ID: 13542
// Name: openGuildSettingsPickerModal
// Dependencies: [4412, 13542, 2009, 2]
// Exports: openGuildSettingsPickerModal

// Module 13541 (openGuildSettingsPickerModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;

const result = set.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(13542, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
