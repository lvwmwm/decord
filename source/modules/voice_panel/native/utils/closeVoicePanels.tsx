// Module ID: 10474
// Function ID: 81099
// Name: closeVoicePanels
// Dependencies: []
// Exports: default

// Module 10474 (closeVoicePanels)
const ComponentActions = require(dependencyMap[0]).ComponentActions;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/voice_panel/native/utils/closeVoicePanels.tsx");

export default function closeVoicePanels() {
  const ComponentDispatch = require(dependencyMap[1]).ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.VOICE_PANEL_CLOSE);
};
