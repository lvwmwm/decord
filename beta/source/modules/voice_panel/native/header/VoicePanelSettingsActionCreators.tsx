// Module ID: 18009
// Function ID: 18010
// Name: VoicePanelSettingsActionCreators
// Dependencies: [5127, 18010, 2119, 2]
// Exports: closeVoicePanelSettingsActionSheet, openVoicePanelSettingsActionSheet

// Module 18009 (VoicePanelSettingsActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
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
  obj.openLazy(asyncRequire(18010, dependencyMap.paths), VoicePanelSettingsActionSheet, obj2);
}
