// Module ID: 9423
// Function ID: 9424
// Name: closeVoicePanels
// Dependencies: [676, 1231, 2]
// Exports: default

// Module 9423 (closeVoicePanels)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import ComponentDispatcher from "ComponentDispatcher" /* 1231 */;

const ComponentActions = ME.ComponentActions;
const result = set.fileFinishedImporting("modules/voice_panel/native/utils/closeVoicePanels.tsx");

export default function closeVoicePanels() {
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.VOICE_PANEL_CLOSE);
};
