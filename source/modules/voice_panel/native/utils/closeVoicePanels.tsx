// Module ID: 10655
// Function ID: 10656
// Name: closeVoicePanels
// Dependencies: [676, 1231, 2]
// Exports: default

// Module 10655 (closeVoicePanels)
import { ComponentActions } from "ME";

const result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/closeVoicePanels.tsx");

export default function closeVoicePanels() {
  const ComponentDispatch = require(1231) /* ComponentDispatcher */.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.VOICE_PANEL_CLOSE);
};
