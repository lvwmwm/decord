// Module ID: 20102
// Function ID: 20103
// Name: VoicePanelDockActionCreators
// Dependencies: [572, 2]
// Exports: dismissVoicePanelDockVideoPIP, dismissVoicePanelDockWatchPrompt

// Module 20102 (VoicePanelDockActionCreators)
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
