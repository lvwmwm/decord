// Module ID: 19318
// Function ID: 19319
// Name: VoicePanelDockActionCreators
// Dependencies: [572, 2]
// Exports: dismissVoicePanelDockVideoPIP, dismissVoicePanelDockWatchPrompt

// Module 19318 (VoicePanelDockActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockActionCreators.tsx");

export function dismissVoicePanelDockWatchPrompt() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "VOICE_PANEL_DOCK_WATCH_PROMPT_DISMISS" });
}
export function dismissVoicePanelDockVideoPIP() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "VOICE_PANEL_DOCK_VIDEO_PIP_DISMISS" });
}
