// Module ID: 15838
// Function ID: 122236
// Name: VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY
// Dependencies: [4098, 15839, 1934, 2]
// Exports: closeVoicePanelSettingsActionSheet, openVoicePanelSettingsActionSheet

// Module 15838 (VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionCreators.tsx");

export const VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY = "VoicePanelSettingsActionSheet";
export const closeVoicePanelSettingsActionSheet = function closeVoicePanelSettingsActionSheet() {
  importDefault(4098).hideActionSheet("VoicePanelSettingsActionSheet");
};
export const openVoicePanelSettingsActionSheet = function openVoicePanelSettingsActionSheet(guildId, channelId) {
  let obj = importDefault(4098);
  obj = { guildId, channelId };
  obj.openLazy(require(1934) /* maybeLoadBundle */(15839, dependencyMap.paths), "VoicePanelSettingsActionSheet", obj);
};
