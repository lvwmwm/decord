// Module ID: 13142
// Function ID: 13143
// Name: openGuildSettingsPickerModal
// Dependencies: [4253, 13143, 1959, 2]
// Exports: openGuildSettingsPickerModal

// Module 13142 (openGuildSettingsPickerModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  importDefault(4253).openLazy(require(1959) /* asyncRequireImpl */(13143, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
