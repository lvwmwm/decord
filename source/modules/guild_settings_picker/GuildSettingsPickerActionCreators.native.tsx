// Module ID: 12895
// Function ID: 100082
// Name: openGuildSettingsPickerModal
// Dependencies: [4098, 12896, 1934, 2]
// Exports: openGuildSettingsPickerModal

// Module 12895 (openGuildSettingsPickerModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(12896, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
