// Module ID: 13594
// Function ID: 13595
// Name: openGuildSettingsPickerModal
// Dependencies: [4415, 13595, 2009, 2]
// Exports: openGuildSettingsPickerModal

// Module 13594 (openGuildSettingsPickerModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4415 */;

const result = set.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(13595, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
