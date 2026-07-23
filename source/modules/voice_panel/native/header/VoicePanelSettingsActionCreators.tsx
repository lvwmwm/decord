// Module ID: 15791
// Function ID: 121914
// Name: VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY
// Dependencies: [4098, 15792, 1934, 2]
// Exports: closeVoicePanelSettingsActionSheet, openVoicePanelSettingsActionSheet

// Module 15791 (VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionCreators.tsx");

export const VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY = "VoicePanelSettingsActionSheet";
export const closeVoicePanelSettingsActionSheet = function closeVoicePanelSettingsActionSheet() {
  importDefault(4098).hideActionSheet("VoicePanelSettingsActionSheet");
};
export const openVoicePanelSettingsActionSheet = function openVoicePanelSettingsActionSheet(guildId, channelId) {
  let obj = importDefault(4098);
  obj = { guildId, channelId };
  obj.openLazy(require(1934) /* maybeLoadBundle */(15792, dependencyMap.paths), "VoicePanelSettingsActionSheet", obj);
};
