// Module ID: 10050
// Function ID: 77635
// Name: CARD_SIZE
// Dependencies: [689, 2]
// Exports: getCallTileGutter, getEdgeGutter

// Module 10050 (CARD_SIZE)
const result = require("set").fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardConstants.tsx");

export const CARD_SIZE = 165;
export const CALL_TILE_GUTTER = 12;
export const EDGE_GUTTER = 12;
export const getCallTileGutter = function getCallTileGutter() {
  let items = arg0;
  if (arg0 === undefined) {
    items = [];
  }
  const VOICE_PANEL_GUTTER = importDefault(689).modules.mobile.VOICE_PANEL_GUTTER;
  const obj = { enabledExperiments: items };
  return VOICE_PANEL_GUTTER.resolve(obj);
};
export const getEdgeGutter = function getEdgeGutter() {
  let items = arg0;
  if (arg0 === undefined) {
    items = [];
  }
  const VOICE_PANEL_GUTTER = importDefault(689).modules.mobile.VOICE_PANEL_GUTTER;
  const obj = { enabledExperiments: items };
  return VOICE_PANEL_GUTTER.resolve(obj);
};
export const CARD_BACKGROUND_OPACITY_ANDROID = 0.32;
export const VOICE_PANEL_CONTROLS_OPACITY_ANDROID = 0.54;
export const VOICE_PANEL_CARD_INNER_PADDING = 8;
