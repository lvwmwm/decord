// Module ID: 11678
// Function ID: 11679
// Name: ConjurePreviewMode
// Dependencies: [3883, 1128, 6297, 2]
// Exports: getPreviewFrameSurfaceLabel, getPreviewModeLabel

// Module 11678 (ConjurePreviewMode)
import intl2 from "intl" /* 1128 */;
import _modDef3883 from "module_3883" /* 3883 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 6297 */;
import size from "module_2" /* 2 */;

const obj = { frame: _modDef3883.FKuG6X, widget: _modDef3883.oOAVlP, overlay: _modDef3883.EnTNKg, bot: _modDef3883.uE5z15 };
const obj2 = {};
obj2[EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL] = _modDef3883.xI4N6Q;
obj2[EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef3883.oWMDh6;
obj2[EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN] = _modDef3883["0ICBnS"];
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
