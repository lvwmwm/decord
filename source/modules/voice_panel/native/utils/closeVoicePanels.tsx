// Module ID: 9437
// Function ID: 9438
// Name: closeVoicePanels
// Dependencies: [673, 1228, 2]
// Exports: default

// Module 9437 (closeVoicePanels)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import ComponentDispatcher from "ComponentDispatcher" /* 1228 */;

const ComponentActions = ME.ComponentActions;
const result = set.fileFinishedImporting("modules/voice_panel/native/utils/closeVoicePanels.tsx");

export default function closeVoicePanels() {
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.VOICE_PANEL_CLOSE);
};
