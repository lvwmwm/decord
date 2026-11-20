// Module ID: 13138
// Function ID: 13139
// Name: ConjurePreviewMode
// Dependencies: [5967, 4131, 1113, 2]
// Exports: getPreviewFrameSurfaceLabel

// Module 13138 (ConjurePreviewMode)
import intl2 from "intl" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5967 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL] = _modDef4131.xI4N6Q;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4131.oWMDh6;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN] = _modDef4131["0ICBnS"];
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = intl2.intl;
  return intl.string(obj[surface]);
}
