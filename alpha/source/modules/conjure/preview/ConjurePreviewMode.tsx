// Module ID: 11596
// Function ID: 11597
// Name: ConjurePreviewMode
// Dependencies: [3862, 1126, 7259, 2]
// Exports: getPreviewFrameSurfaceLabel, getPreviewModeLabel

// Module 11596 (ConjurePreviewMode)
import intl2 from "intl" /* 1126 */;
import _modDef3862 from "module_3862" /* 3862 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 7259 */;
import size from "module_2" /* 2 */;

const obj = { frame: _modDef3862.FKuG6X, widget: _modDef3862.oOAVlP, overlay: _modDef3862.EnTNKg, bot: _modDef3862.uE5z15 };
const obj2 = {};
obj2[EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL] = _modDef3862.xI4N6Q;
obj2[EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef3862.oWMDh6;
obj2[EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN] = _modDef3862["0ICBnS"];
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export const getPreviewModeLabel = function getPreviewModeLabel(arg0) {
  const intl = intl2.intl;
  return intl.string(obj[arg0]);
};
export const getPreviewFrameSurfaceLabel = function getPreviewFrameSurfaceLabel(surface) {
  const intl = intl2.intl;
  return intl.string(obj2[surface]);
};
