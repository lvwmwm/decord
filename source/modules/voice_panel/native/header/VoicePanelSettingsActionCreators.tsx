// Module ID: 16054
// Function ID: 16055
// Name: VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY
// Dependencies: [4253, 16055, 1959, 2]
// Exports: closeVoicePanelSettingsActionSheet, openVoicePanelSettingsActionSheet

// Module 16054 (VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY)
const VoicePanelSettingsActionSheet = "VoicePanelSettingsActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionCreators.tsx");

export const VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY = "VoicePanelSettingsActionSheet";
export const closeVoicePanelSettingsActionSheet = function closeVoicePanelSettingsActionSheet() {
  importDefault(4253).hideActionSheet(VoicePanelSettingsActionSheet);
};
export const openVoicePanelSettingsActionSheet = function openVoicePanelSettingsActionSheet(guildId, channelId) {
  let obj = importDefault(4253);
  obj = { guildId, channelId };
  obj.openLazy(require(1959) /* asyncRequireImpl */(16055, dependencyMap.paths), VoicePanelSettingsActionSheet, obj);
};
