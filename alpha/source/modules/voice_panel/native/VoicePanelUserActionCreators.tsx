// Module ID: 19428
// Function ID: 19429
// Name: VoicePanelUserActionCreators
// Dependencies: [5226, 19429, 2119, 2]
// Exports: closeVoicePanelUserActionSheet, openVoicePanelUserActionSheet

// Module 19428 (VoicePanelUserActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
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
  obj.openLazy(asyncRequire(19429, dependencyMap.paths), VoicePanelUserActionSheet, obj2);
}
