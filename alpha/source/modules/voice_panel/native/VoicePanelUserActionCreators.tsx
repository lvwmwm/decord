// Module ID: 19190
// Function ID: 19191
// Name: VoicePanelUserActionCreators
// Dependencies: [5253, 19191, 1995, 2]
// Exports: closeVoicePanelUserActionSheet, openVoicePanelUserActionSheet

// Module 19190 (VoicePanelUserActionCreators)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
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
  obj.openLazy(asyncRequire(19191, dependencyMap.paths), VoicePanelUserActionSheet, obj2);
}
