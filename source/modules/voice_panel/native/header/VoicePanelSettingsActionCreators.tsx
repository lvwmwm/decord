// Module ID: 15900
// Function ID: 122608
// Name: VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY
// Dependencies: [4133, 15901, 1935, 2]
// Exports: closeVoicePanelSettingsActionSheet, openVoicePanelSettingsActionSheet

// Module 15900 (VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionCreators.tsx");

export const VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY = "VoicePanelSettingsActionSheet";
export const closeVoicePanelSettingsActionSheet = function closeVoicePanelSettingsActionSheet() {
  importDefault(4133).hideActionSheet("VoicePanelSettingsActionSheet");
};
export const openVoicePanelSettingsActionSheet = function openVoicePanelSettingsActionSheet(guildId, channelId) {
  let obj = importDefault(4133);
  obj = { guildId, channelId };
  obj.openLazy(require(1935) /* maybeLoadBundle */(15901, dependencyMap.paths), "VoicePanelSettingsActionSheet", obj);
};
