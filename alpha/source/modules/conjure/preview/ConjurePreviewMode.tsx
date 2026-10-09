// Module ID: 17013
// Function ID: 17014
// Name: ConjurePreviewMode
// Dependencies: [3827, 1126, 8594, 2]
// Exports: getPreviewFrameSurfaceLabel, getPreviewModeLabel

// Module 17013 (ConjurePreviewMode)
import intl2 from "intl" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8594 */;
import size from "module_2" /* 2 */;

const obj = { frame: _modDef3827.FKuG6X, widget: _modDef3827.oOAVlP, overlay: _modDef3827.EnTNKg, bot: _modDef3827.uE5z15 };
const obj2 = {};
obj2[EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL] = _modDef3827.xI4N6Q;
obj2[EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef3827.oWMDh6;
obj2[EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN] = _modDef3827["0ICBnS"];
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
