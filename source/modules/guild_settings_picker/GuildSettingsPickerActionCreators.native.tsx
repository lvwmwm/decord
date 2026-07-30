// Module ID: 13021
// Function ID: 13022
// Name: openGuildSettingsPickerModal
// Dependencies: [4157, 13022, 1959, 2]
// Exports: openGuildSettingsPickerModal

// Module 13021 (openGuildSettingsPickerModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(13022, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
