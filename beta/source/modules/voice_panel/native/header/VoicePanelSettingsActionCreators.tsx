// Module ID: 19194
// Function ID: 19195
// Name: VoicePanelSettingsActionCreators
// Dependencies: [5542, 19195, 2121, 2]
// Exports: closeVoicePanelSettingsActionSheet, openVoicePanelSettingsActionSheet

// Module 19194 (VoicePanelSettingsActionCreators)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
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
  obj.openLazy(asyncRequire(19195, dependencyMap.paths), VoicePanelSettingsActionSheet, obj2);
}
