// Module ID: 12959
// Function ID: 100537
// Name: openGuildSettingsPickerModal
// Dependencies: [4099, 12960, 1935, 2]
// Exports: openGuildSettingsPickerModal

// Module 12959 (openGuildSettingsPickerModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(12960, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
