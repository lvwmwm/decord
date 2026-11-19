// Module ID: 18287
// Function ID: 18288
// Name: ConjurePreviewMode
// Dependencies: [5436, 4089, 1113, 2]
// Exports: getPreviewFrameSurfaceLabel

// Module 18287 (ConjurePreviewMode)
import intl2 from "intl" /* 1113 */;
import _modDef4089 from "module_4089" /* 4089 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5436 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL] = _modDef4089.xI4N6Q;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4089.oWMDh6;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN] = _modDef4089["0ICBnS"];
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = intl2.intl;
  return intl.string(obj[surface]);
}
