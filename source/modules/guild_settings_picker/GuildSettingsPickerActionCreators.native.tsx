// Module ID: 13302
// Function ID: 13303
// Name: openGuildSettingsPickerModal
// Dependencies: [4312, 13303, 2007, 2]
// Exports: openGuildSettingsPickerModal

// Module 13302 (openGuildSettingsPickerModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  importDefault(4312).openLazy(require(2007) /* asyncRequireImpl */(13303, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
