// Module ID: 12765
// Function ID: 97848
// Name: openGuildSettingsPickerModal
// Dependencies: []
// Exports: openGuildSettingsPickerModal

// Module 12765 (openGuildSettingsPickerModal)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  importDefault(dependencyMap[0]).openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
