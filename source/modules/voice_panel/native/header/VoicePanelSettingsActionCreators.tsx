// Module ID: 15861
// Function ID: 122452
// Name: VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY
// Dependencies: [4099, 15862, 1935, 2]
// Exports: closeVoicePanelSettingsActionSheet, openVoicePanelSettingsActionSheet

// Module 15861 (VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionCreators.tsx");

export const VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY = "VoicePanelSettingsActionSheet";
export const closeVoicePanelSettingsActionSheet = function closeVoicePanelSettingsActionSheet() {
  importDefault(4099).hideActionSheet("VoicePanelSettingsActionSheet");
};
export const openVoicePanelSettingsActionSheet = function openVoicePanelSettingsActionSheet(guildId, channelId) {
  let obj = importDefault(4099);
  obj = { guildId, channelId };
  obj.openLazy(require(1935) /* maybeLoadBundle */(15862, dependencyMap.paths), "VoicePanelSettingsActionSheet", obj);
};
