// Module ID: 19499
// Function ID: 19500
// Name: VoicePanelSettingsActionCreators
// Dependencies: [5382, 19500, 2123, 2]
// Exports: closeVoicePanelSettingsActionSheet, openVoicePanelSettingsActionSheet

// Module 19499 (VoicePanelSettingsActionCreators)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const VoicePanelSettingsActionSheet = "VoicePanelSettingsActionSheet";
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionCreators.tsx");

export const VOICE_PANEL_SETTINGS_ACTION_SHEET_KEY = "VoicePanelSettingsActionSheet";
export function closeVoicePanelSettingsActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(VoicePanelSettingsActionSheet);
}
export function openVoicePanelSettingsActionSheet(guildId, channelId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { guildId, channelId };
  obj.openLazy(asyncRequire(19500, dependencyMap.paths), VoicePanelSettingsActionSheet, obj2);
}
