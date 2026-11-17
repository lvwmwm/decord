// Module ID: 14379
// Function ID: 14380
// Name: ConjurePreviewMode
// Dependencies: [5971, 4133, 1113, 2]
// Exports: getPreviewFrameSurfaceLabel

// Module 14379 (ConjurePreviewMode)
import intl2 from "intl" /* 1113 */;
import _modDef4133 from "module_4133" /* 4133 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5971 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL] = _modDef4133.xI4N6Q;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4133.oWMDh6;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN] = _modDef4133["0ICBnS"];
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = intl2.intl;
  return intl.string(obj[surface]);
}
