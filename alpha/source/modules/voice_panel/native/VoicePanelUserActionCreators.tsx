// Module ID: 19560
// Function ID: 19561
// Name: VoicePanelUserActionCreators
// Dependencies: [5384, 19561, 2123, 2]
// Exports: closeVoicePanelUserActionSheet, openVoicePanelUserActionSheet

// Module 19560 (VoicePanelUserActionCreators)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
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
  obj.openLazy(asyncRequire(19561, dependencyMap.paths), VoicePanelUserActionSheet, obj2);
}
