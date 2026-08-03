// Module ID: 16021
// Function ID: 16022
// Name: VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY
// Dependencies: [4223, 16022, 1959, 2]
// Exports: closeVoicePanelSettingsActionSheet, openVoicePanelSettingsActionSheet

// Module 16021 (VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY)
const VoicePanelSettingsActionSheet = "VoicePanelSettingsActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionCreators.tsx");

export const VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY = "VoicePanelSettingsActionSheet";
export const closeVoicePanelSettingsActionSheet = function closeVoicePanelSettingsActionSheet() {
  importDefault(4223).hideActionSheet(VoicePanelSettingsActionSheet);
};
export const openVoicePanelSettingsActionSheet = function openVoicePanelSettingsActionSheet(guildId, channelId) {
  let obj = importDefault(4223);
  obj = { guildId, channelId };
  obj.openLazy(require(1959) /* asyncRequireImpl */(16022, dependencyMap.paths), VoicePanelSettingsActionSheet, obj);
};
