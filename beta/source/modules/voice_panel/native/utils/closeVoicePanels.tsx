// Module ID: 9600
// Function ID: 9601
// Name: closeVoicePanels
// Dependencies: [1078, 1114, 2]
// Exports: default

// Module 9600 (closeVoicePanels)
import Constants from "Constants" /* 1078 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1114 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/closeVoicePanels.tsx");

export default function closeVoicePanels() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.VOICE_PANEL_CLOSE);
};
