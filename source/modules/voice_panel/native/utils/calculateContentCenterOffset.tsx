// Module ID: 15700
// Function ID: 120010
// Name: EDGE_GUTTER
// Dependencies: []
// Exports: default

// Module 15700 (EDGE_GUTTER)
const EDGE_GUTTER = require(dependencyMap[0]).EDGE_GUTTER;
const fn = function t(arg0) {
  let contentHeight;
  let safeArea;
  let windowHeight;
  ({ contentHeight, windowHeight, safeArea } = arg0);
  const bound = Math.max(safeArea.top, EDGE_GUTTER);
  let bound1 = bound;
  if (windowHeight > contentHeight) {
    const _Math = Math;
    bound1 = Math.max(bound, bound + importDefault(dependencyMap[1])((windowHeight - bound - tmp2 - contentHeight) / 2));
  }
  return bound1;
};
fn.__closure = { EDGE_GUTTER, roundToNearestPixel: importDefault(dependencyMap[1]) };
fn.__workletHash = 9988657249690;
fn.__initData = { code: "function calculateContentCenterOffset_calculateContentCenterOffsetTsx1({contentHeight:contentHeight,windowHeight:windowHeight,safeArea:safeArea}){const{EDGE_GUTTER,roundToNearestPixel}=this.__closure;const safeAreaTop=Math.max(safeArea.top,EDGE_GUTTER);const safeAreaBottom=Math.max(safeArea.bottom,EDGE_GUTTER);if(windowHeight<=contentHeight){return safeAreaTop;}return Math.max(safeAreaTop,safeAreaTop+roundToNearestPixel((windowHeight-safeAreaTop-safeAreaBottom-contentHeight)/2));}" };
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/voice_panel/native/utils/calculateContentCenterOffset.tsx");

export default fn;
