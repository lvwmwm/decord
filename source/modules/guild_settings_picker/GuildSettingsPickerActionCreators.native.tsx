// Module ID: 12947
// Function ID: 100405
// Name: openGuildSettingsPickerModal
// Dependencies: [4098, 12948, 1934, 2]
// Exports: openGuildSettingsPickerModal

// Module 12947 (openGuildSettingsPickerModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(12948, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
