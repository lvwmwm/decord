// Module ID: 15674
// Function ID: 119741
// Name: VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY
// Dependencies: []
// Exports: closeVoicePanelSettingsActionSheet, openVoicePanelSettingsActionSheet

// Module 15674 (VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionCreators.tsx");

export const VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY = "VoicePanelSettingsActionSheet";
export const closeVoicePanelSettingsActionSheet = function closeVoicePanelSettingsActionSheet() {
  importDefault(dependencyMap[0]).hideActionSheet("VoicePanelSettingsActionSheet");
};
export const openVoicePanelSettingsActionSheet = function openVoicePanelSettingsActionSheet(guildId, channelId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { guildId, channelId };
  obj.openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "VoicePanelSettingsActionSheet", obj);
};
