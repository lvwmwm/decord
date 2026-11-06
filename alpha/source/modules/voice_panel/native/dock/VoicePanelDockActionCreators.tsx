// Module ID: 19607
// Function ID: 19608
// Name: VoicePanelDockActionCreators
// Dependencies: [572, 2]
// Exports: dismissVoicePanelDockWatchPrompt

// Module 19607 (VoicePanelDockActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockActionCreators.tsx");

export function dismissVoicePanelDockWatchPrompt() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "VOICE_PANEL_DOCK_WATCH_PROMPT_DISMISS" });
}
