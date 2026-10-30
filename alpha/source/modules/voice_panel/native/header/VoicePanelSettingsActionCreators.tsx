// Module ID: 19164
// Function ID: 19165
// Name: VoicePanelSettingsActionCreators
// Dependencies: [5253, 19165, 1995, 2]
// Exports: closeVoicePanelSettingsActionSheet, openVoicePanelSettingsActionSheet

// Module 19164 (VoicePanelSettingsActionCreators)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
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
  obj.openLazy(asyncRequire(19165, dependencyMap.paths), VoicePanelSettingsActionSheet, obj2);
}
