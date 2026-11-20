// Module ID: 12175
// Function ID: 12176
// Name: ConjurePreviewMode
// Dependencies: [5438, 4091, 1112, 2]
// Exports: getPreviewFrameSurfaceLabel

// Module 12175 (ConjurePreviewMode)
import intl2 from "intl" /* 1112 */;
import _modDef4091 from "module_4091" /* 4091 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5438 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL] = _modDef4091.xI4N6Q;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4091.oWMDh6;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN] = _modDef4091["0ICBnS"];
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = intl2.intl;
  return intl.string(obj[surface]);
}
