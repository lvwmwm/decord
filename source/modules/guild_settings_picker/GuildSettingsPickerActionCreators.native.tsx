// Module ID: 13235
// Function ID: 13236
// Name: openGuildSettingsPickerModal
// Dependencies: [4271, 13236, 1988, 2]
// Exports: openGuildSettingsPickerModal

// Module 13235 (openGuildSettingsPickerModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  importDefault(4271).openLazy(require(1988) /* asyncRequireImpl */(13236, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
