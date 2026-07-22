// Module ID: 10013
// Function ID: 77413
// Name: t
// Dependencies: []
// Exports: default

// Module 10013 (t)
const fn = function t(top) {
  const bound = Math.max(arg1, top.top);
  return { height: 44 + bound, paddingTop: bound, paddingLeft: Math.max(arg1, top.left), paddingRight: Math.max(arg1, top.right) };
};
fn.__closure = { BASE_VOICE_PANEL_HEADER_HEIGHT: 44 };
fn.__workletHash = 6201232972174;
fn.__initData = { code: "function calculateVoicePanelHeaderSpecs_calculateVoicePanelHeaderSpecsTsx1(safeArea,edgeGutter){const{BASE_VOICE_PANEL_HEADER_HEIGHT}=this.__closure;const paddingTop=Math.max(edgeGutter,safeArea.top);const paddingLeft=Math.max(edgeGutter,safeArea.left);const paddingRight=Math.max(edgeGutter,safeArea.right);const height=BASE_VOICE_PANEL_HEADER_HEIGHT+paddingTop;return{height:height,paddingTop:paddingTop,paddingLeft:paddingLeft,paddingRight:paddingRight};}" };
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/voice_panel/native/header/calculateVoicePanelHeaderSpecs.tsx");

export default fn;
export const BASE_VOICE_PANEL_HEADER_HEIGHT = 44;
