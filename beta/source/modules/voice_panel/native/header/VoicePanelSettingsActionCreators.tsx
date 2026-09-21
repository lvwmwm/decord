// Module ID: 17573
// Function ID: 17574
// Name: VoicePanelSettingsActionCreators
// Dependencies: [4723, 17574, 1980, 2]
// Exports: closeVoicePanelSettingsActionSheet, openVoicePanelSettingsActionSheet

// Module 17573 (VoicePanelSettingsActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const VoicePanelSettingsActionSheet = "VoicePanelSettingsActionSheet";
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionCreators.tsx");

export const VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY = "VoicePanelSettingsActionSheet";
export const closeVoicePanelSettingsActionSheet = function closeVoicePanelSettingsActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(VoicePanelSettingsActionSheet);
};
export const openVoicePanelSettingsActionSheet = function openVoicePanelSettingsActionSheet(guildId, channelId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17574, dependencyMap.paths), VoicePanelSettingsActionSheet, { guildId, channelId });
};
