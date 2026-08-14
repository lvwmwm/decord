// Module ID: 13316
// Function ID: 13317
// Name: openGuildSettingsPickerModal
// Dependencies: [4310, 13317, 2007, 2]
// Exports: openGuildSettingsPickerModal

// Module 13316 (openGuildSettingsPickerModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(13317, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
