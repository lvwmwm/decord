// Module ID: 12958
// Function ID: 100532
// Name: openGuildSettingsPickerModal
// Dependencies: [4099, 12959, 1935, 2]
// Exports: openGuildSettingsPickerModal

// Module 12958 (openGuildSettingsPickerModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(12959, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
