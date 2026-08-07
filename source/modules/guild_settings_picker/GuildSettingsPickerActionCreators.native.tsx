// Module ID: 13165
// Function ID: 13166
// Name: openGuildSettingsPickerModal
// Dependencies: [4270, 13166, 1988, 2]
// Exports: openGuildSettingsPickerModal

// Module 13165 (openGuildSettingsPickerModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  importDefault(4270).openLazy(require(1988) /* asyncRequireImpl */(13166, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
