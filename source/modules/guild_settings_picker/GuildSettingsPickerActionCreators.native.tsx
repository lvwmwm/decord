// Module ID: 13151
// Function ID: 13152
// Name: openGuildSettingsPickerModal
// Dependencies: [4253, 13152, 1988, 2]
// Exports: openGuildSettingsPickerModal

// Module 13151 (openGuildSettingsPickerModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  importDefault(4253).openLazy(require(1988) /* asyncRequireImpl */(13152, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
