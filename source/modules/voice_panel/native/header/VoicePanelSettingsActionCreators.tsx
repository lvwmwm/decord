// Module ID: 15929
// Function ID: 15930
// Name: VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY
// Dependencies: [4157, 15930, 1959, 2]
// Exports: closeVoicePanelSettingsActionSheet, openVoicePanelSettingsActionSheet

// Module 15929 (VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY)
const VoicePanelSettingsActionSheet = "VoicePanelSettingsActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionCreators.tsx");

export const VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY = "VoicePanelSettingsActionSheet";
export const closeVoicePanelSettingsActionSheet = function closeVoicePanelSettingsActionSheet() {
  importDefault(4157).hideActionSheet(VoicePanelSettingsActionSheet);
};
export const openVoicePanelSettingsActionSheet = function openVoicePanelSettingsActionSheet(guildId, channelId) {
  let obj = importDefault(4157);
  obj = { guildId, channelId };
  obj.openLazy(require(1959) /* asyncRequireImpl */(15930, dependencyMap.paths), VoicePanelSettingsActionSheet, obj);
};
