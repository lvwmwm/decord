// Module ID: 9638
// Function ID: 9639
// Name: closeVoicePanels
// Dependencies: [1074, 1109, 2]
// Exports: default

// Module 9638 (closeVoicePanels)
import Constants from "Constants" /* 1074 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/closeVoicePanels.tsx");

export default function closeVoicePanels() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.VOICE_PANEL_CLOSE);
};
