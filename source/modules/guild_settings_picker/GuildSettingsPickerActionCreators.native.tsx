// Module ID: 13046
// Function ID: 13047
// Name: openGuildSettingsPickerModal
// Dependencies: [4161, 13047, 1959, 2]
// Exports: openGuildSettingsPickerModal

// Module 13046 (openGuildSettingsPickerModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  importDefault(4161).openLazy(require(1959) /* asyncRequireImpl */(13047, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
