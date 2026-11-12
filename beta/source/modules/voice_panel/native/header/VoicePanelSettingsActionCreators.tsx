// Module ID: 19626
// Function ID: 19627
// Name: VoicePanelSettingsActionCreators
// Dependencies: [5406, 19627, 2118, 2]
// Exports: closeVoicePanelSettingsActionSheet, openVoicePanelSettingsActionSheet

// Module 19626 (VoicePanelSettingsActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
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
  obj.openLazy(asyncRequire(19627, dependencyMap.paths), VoicePanelSettingsActionSheet, obj2);
}
