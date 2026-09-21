// Module ID: 9572
// Function ID: 9573
// Name: closeVoicePanels
// Dependencies: [1074, 1110, 2]
// Exports: default

// Module 9572 (closeVoicePanels)
import Constants from "Constants" /* 1074 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/closeVoicePanels.tsx");

export default function closeVoicePanels() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.VOICE_PANEL_CLOSE);
};
