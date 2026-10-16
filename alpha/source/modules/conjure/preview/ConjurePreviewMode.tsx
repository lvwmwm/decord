// Module ID: 11619
// Function ID: 11620
// Name: ConjurePreviewMode
// Dependencies: [3865, 1128, 7261, 2]
// Exports: getPreviewFrameSurfaceLabel, getPreviewModeLabel

// Module 11619 (ConjurePreviewMode)
import intl2 from "intl" /* 1128 */;
import _modDef3865 from "module_3865" /* 3865 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 7261 */;
import size from "module_2" /* 2 */;

const obj = { frame: _modDef3865.FKuG6X, widget: _modDef3865.oOAVlP, overlay: _modDef3865.EnTNKg, bot: _modDef3865.uE5z15 };
const obj2 = {};
obj2[EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL] = _modDef3865.xI4N6Q;
obj2[EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef3865.oWMDh6;
obj2[EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN] = _modDef3865["0ICBnS"];
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
