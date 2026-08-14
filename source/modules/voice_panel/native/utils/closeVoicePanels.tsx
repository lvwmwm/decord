// Module ID: 10587
// Function ID: 10588
// Name: closeVoicePanels
// Dependencies: [676, 1231, 2]
// Exports: default

// Module 10587 (closeVoicePanels)
import { ComponentActions } from "ME";

const result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/closeVoicePanels.tsx");

export default function closeVoicePanels() {
  const ComponentDispatch = require(1231) /* ComponentDispatcher */.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.VOICE_PANEL_CLOSE);
};
