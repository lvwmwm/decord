// Module ID: 12256
// Function ID: 12257
// Name: ConjurePreviewMode
// Dependencies: [5801, 4028, 1113, 2]
// Exports: getPreviewFrameSurfaceLabel

// Module 12256 (ConjurePreviewMode)
import intl2 from "intl" /* 1113 */;
import _modDef4028 from "module_4028" /* 4028 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5801 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL] = _modDef4028.xI4N6Q;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef4028.oWMDh6;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN] = _modDef4028["0ICBnS"];
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = intl2.intl;
  return intl.string(obj[surface]);
}
