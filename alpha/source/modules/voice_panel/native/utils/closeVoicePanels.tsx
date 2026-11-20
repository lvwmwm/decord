// Module ID: 10503
// Function ID: 10504
// Name: closeVoicePanels
// Dependencies: [1071, 1107, 2]
// Exports: default

// Module 10503 (closeVoicePanels)
import Constants from "Constants" /* 1071 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1107 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/closeVoicePanels.tsx");

export default function closeVoicePanels() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.VOICE_PANEL_CLOSE);
};
