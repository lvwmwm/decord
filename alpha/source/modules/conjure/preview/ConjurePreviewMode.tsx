// Module ID: 18294
// Function ID: 18295
// Name: ConjurePreviewMode
// Dependencies: [5467, 4121, 1113, 2]
// Exports: getPreviewFrameSurfaceLabel

// Module 18294 (ConjurePreviewMode)
import intl2 from "intl" /* 1113 */;
import _modDef4121 from "module_4121" /* 4121 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5467 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL] = _modDef4121.xI4N6Q;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4121.oWMDh6;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN] = _modDef4121["0ICBnS"];
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = intl2.intl;
  return intl.string(obj[surface]);
}
