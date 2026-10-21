// Module ID: 10725
// Function ID: 10726
// Name: closeVoicePanels
// Dependencies: [1087, 1123, 2]
// Exports: default

// Module 10725 (closeVoicePanels)
import Constants from "Constants" /* 1087 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1123 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/closeVoicePanels.tsx");

export default function closeVoicePanels() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.VOICE_PANEL_CLOSE);
};
