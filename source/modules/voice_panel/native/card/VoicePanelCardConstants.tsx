// Module ID: 10009
// Function ID: 77377
// Name: CARD_SIZE
// Dependencies: []
// Exports: getCallTileGutter, getEdgeGutter

// Module 10009 (CARD_SIZE)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardConstants.tsx");

export const CARD_SIZE = 165;
export const CALL_TILE_GUTTER = 12;
export const EDGE_GUTTER = 12;
export const getCallTileGutter = function getCallTileGutter() {
  let items = arg0;
  if (arg0 === undefined) {
    items = [];
  }
  const VOICE_PANEL_GUTTER = importDefault(dependencyMap[0]).modules.mobile.VOICE_PANEL_GUTTER;
  const obj = { enabledExperiments: items };
  return VOICE_PANEL_GUTTER.resolve(obj);
};
export const getEdgeGutter = function getEdgeGutter() {
  let items = arg0;
  if (arg0 === undefined) {
    items = [];
  }
  const VOICE_PANEL_GUTTER = importDefault(dependencyMap[0]).modules.mobile.VOICE_PANEL_GUTTER;
  const obj = { enabledExperiments: items };
  return VOICE_PANEL_GUTTER.resolve(obj);
};
export const CARD_BACKGROUND_OPACITY_ANDROID = 0.32;
export const VOICE_PANEL_CONTROLS_OPACITY_ANDROID = 0.54;
export const VOICE_PANEL_CARD_INNER_PADDING = 8;
