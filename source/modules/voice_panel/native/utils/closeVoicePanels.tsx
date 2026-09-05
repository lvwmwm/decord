// Module ID: 9508
// Function ID: 9509
// Name: closeVoicePanels
// Dependencies: [1074, 1109, 2]
// Exports: default

// Module 9508 (closeVoicePanels)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import ComponentDispatcher from "ComponentDispatcher" /* 1109 */;

const ComponentActions = ME.ComponentActions;
const result = set.fileFinishedImporting("modules/voice_panel/native/utils/closeVoicePanels.tsx");

export default function closeVoicePanels() {
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.VOICE_PANEL_CLOSE);
};
