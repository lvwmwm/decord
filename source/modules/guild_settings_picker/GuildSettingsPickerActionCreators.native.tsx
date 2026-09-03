// Module ID: 13866
// Function ID: 13867
// Name: openGuildSettingsPickerModal
// Dependencies: [4445, 13867, 2008, 2]
// Exports: openGuildSettingsPickerModal

// Module 13866 (openGuildSettingsPickerModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(13867, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
