// Module ID: 19326
// Function ID: 19327
// Name: VoicePanelUserActionCreators
// Dependencies: [5006, 19327, 2121, 2]
// Exports: closeVoicePanelUserActionSheet, openVoicePanelUserActionSheet

// Module 19326 (VoicePanelUserActionCreators)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

const VoicePanelUserActionSheet = "VoicePanelUserActionSheet";
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelUserActionCreators.tsx");

export const VOICE_PANEL_USER_ACTION_SHEET_KEY = "VoicePanelUserActionSheet";
export function closeVoicePanelUserActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(VoicePanelUserActionSheet);
}
export function openVoicePanelUserActionSheet(guildId, channelId, userId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { guildId, channelId, userId };
  obj.openLazy(asyncRequire(19327, dependencyMap.paths), VoicePanelUserActionSheet, obj2);
}
