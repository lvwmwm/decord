// Module ID: 12297
// Function ID: 12298
// Name: ConjurePreviewMode
// Dependencies: [5557, 4190, 1112, 2]
// Exports: getPreviewFrameSurfaceLabel

// Module 12297 (ConjurePreviewMode)
import intl2 from "intl" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5557 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL] = _modDef4190.xI4N6Q;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4190.oWMDh6;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN] = _modDef4190["0ICBnS"];
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = intl2.intl;
  return intl.string(obj[surface]);
}
