// Module ID: 12279
// Function ID: 12280
// Name: ConjurePreviewMode
// Dependencies: [5831, 4026, 1113, 2]
// Exports: getPreviewFrameSurfaceLabel

// Module 12279 (ConjurePreviewMode)
import intl2 from "intl" /* 1113 */;
import _modDef4026 from "module_4026" /* 4026 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5831 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL] = _modDef4026.xI4N6Q;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4026.oWMDh6;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN] = _modDef4026["0ICBnS"];
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = intl2.intl;
  return intl.string(obj[surface]);
}
