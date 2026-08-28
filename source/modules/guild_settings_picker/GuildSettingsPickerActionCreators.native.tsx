// Module ID: 13560
// Function ID: 13561
// Name: openGuildSettingsPickerModal
// Dependencies: [4413, 13561, 2010, 2]
// Exports: openGuildSettingsPickerModal

// Module 13560 (openGuildSettingsPickerModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;

const result = set.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(13561, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
