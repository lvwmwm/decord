// Module ID: 13026
// Function ID: 13027
// Name: openGuildSettingsPickerModal
// Dependencies: [4157, 13027, 1959, 2]
// Exports: openGuildSettingsPickerModal

// Module 13026 (openGuildSettingsPickerModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(13027, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
