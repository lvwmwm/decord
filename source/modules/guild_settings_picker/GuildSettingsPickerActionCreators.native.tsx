// Module ID: 13514
// Function ID: 13515
// Name: openGuildSettingsPickerModal
// Dependencies: [4411, 13515, 2009, 2]
// Exports: openGuildSettingsPickerModal

// Module 13514 (openGuildSettingsPickerModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4411 */;

const result = set.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(13515, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
