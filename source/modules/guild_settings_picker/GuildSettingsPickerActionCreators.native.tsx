// Module ID: 13114
// Function ID: 13115
// Name: openGuildSettingsPickerModal
// Dependencies: [4223, 13115, 1959, 2]
// Exports: openGuildSettingsPickerModal

// Module 13114 (openGuildSettingsPickerModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  importDefault(4223).openLazy(require(1959) /* asyncRequireImpl */(13115, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
