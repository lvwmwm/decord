// Module ID: 13348
// Function ID: 13349
// Name: openGuildSettingsPickerModal
// Dependencies: [4342, 13349, 2007, 2]
// Exports: openGuildSettingsPickerModal

// Module 13348 (openGuildSettingsPickerModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  importDefault(4342).openLazy(require(2007) /* asyncRequireImpl */(13349, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
