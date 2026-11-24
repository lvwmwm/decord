// Module ID: 11312
// Function ID: 11313
// Name: ConjurePreviewMode
// Dependencies: [5561, 4192, 1112, 2]
// Exports: getPreviewFrameSurfaceLabel

// Module 11312 (ConjurePreviewMode)
import intl2 from "intl" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5561 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL] = _modDef4192.xI4N6Q;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4192.oWMDh6;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN] = _modDef4192["0ICBnS"];
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = intl2.intl;
  return intl.string(obj[surface]);
}
