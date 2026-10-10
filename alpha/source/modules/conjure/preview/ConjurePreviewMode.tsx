// Module ID: 17080
// Function ID: 17081
// Name: ConjurePreviewMode
// Dependencies: [3849, 1126, 8610, 2]
// Exports: getPreviewFrameSurfaceLabel, getPreviewModeLabel

// Module 17080 (ConjurePreviewMode)
import intl2 from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8610 */;
import size from "module_2" /* 2 */;

const obj = { frame: _modDef3849.FKuG6X, widget: _modDef3849.oOAVlP, overlay: _modDef3849.EnTNKg, bot: _modDef3849.uE5z15 };
const obj2 = {};
obj2[EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL] = _modDef3849.xI4N6Q;
obj2[EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef3849.oWMDh6;
obj2[EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN] = _modDef3849["0ICBnS"];
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
