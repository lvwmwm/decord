// Module ID: 19249
// Function ID: 19250
// Name: VoicePanelUserActionCreators
// Dependencies: [5258, 19250, 1994, 2]
// Exports: closeVoicePanelUserActionSheet, openVoicePanelUserActionSheet

// Module 19249 (VoicePanelUserActionCreators)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
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
  obj.openLazy(asyncRequire(19250, dependencyMap.paths), VoicePanelUserActionSheet, obj2);
}
