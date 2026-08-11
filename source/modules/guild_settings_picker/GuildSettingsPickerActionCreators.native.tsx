// Module ID: 13245
// Function ID: 13246
// Name: openGuildSettingsPickerModal
// Dependencies: [4271, 13246, 2007, 2]
// Exports: openGuildSettingsPickerModal

// Module 13245 (openGuildSettingsPickerModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  importDefault(4271).openLazy(require(2007) /* asyncRequireImpl */(13246, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
