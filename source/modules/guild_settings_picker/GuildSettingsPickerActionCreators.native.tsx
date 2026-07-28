// Module ID: 13003
// Function ID: 100710
// Name: openGuildSettingsPickerModal
// Dependencies: [4133, 13004, 1935, 2]
// Exports: openGuildSettingsPickerModal

// Module 13003 (openGuildSettingsPickerModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  importDefault(4133).openLazy(require(1935) /* maybeLoadBundle */(13004, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
