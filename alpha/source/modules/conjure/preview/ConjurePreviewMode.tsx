// Module ID: 11411
// Function ID: 11412
// Name: ConjurePreviewMode
// Dependencies: [5656, 4244, 1112, 2]
// Exports: getPreviewFrameSurfaceLabel

// Module 11411 (ConjurePreviewMode)
import intl2 from "intl" /* 1112 */;
import _modDef4244 from "module_4244" /* 4244 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5656 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL] = _modDef4244.xI4N6Q;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4244.oWMDh6;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN] = _modDef4244["0ICBnS"];
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = intl2.intl;
  return intl.string(obj[surface]);
}
