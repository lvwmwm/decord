// Module ID: 13237
// Function ID: 13238
// Name: openGuildSettingsPickerModal
// Dependencies: [4271, 13238, 1988, 2]
// Exports: openGuildSettingsPickerModal

// Module 13237 (openGuildSettingsPickerModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  importDefault(4271).openLazy(require(1988) /* asyncRequireImpl */(13238, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
