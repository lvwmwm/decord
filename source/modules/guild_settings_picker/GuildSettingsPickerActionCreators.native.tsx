// Module ID: 13143
// Function ID: 13144
// Name: openGuildSettingsPickerModal
// Dependencies: [4253, 13144, 1959, 2]
// Exports: openGuildSettingsPickerModal

// Module 13143 (openGuildSettingsPickerModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  importDefault(4253).openLazy(require(1959) /* asyncRequireImpl */(13144, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
