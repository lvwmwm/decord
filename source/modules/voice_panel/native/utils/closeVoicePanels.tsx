// Module ID: 10513
// Function ID: 81341
// Name: closeVoicePanels
// Dependencies: [653, 1207, 2]
// Exports: default

// Module 10513 (closeVoicePanels)
import { ComponentActions } from "ME";

const result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/closeVoicePanels.tsx");

export default function closeVoicePanels() {
  const ComponentDispatch = require(1207) /* reportDevtoolsEvent */.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.VOICE_PANEL_CLOSE);
};
