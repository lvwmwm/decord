// Module ID: 13304
// Function ID: 13305
// Name: openGuildSettingsPickerModal
// Dependencies: [4310, 13305, 2007, 2]
// Exports: openGuildSettingsPickerModal

// Module 13304 (openGuildSettingsPickerModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(13305, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
