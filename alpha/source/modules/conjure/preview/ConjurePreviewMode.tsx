// Module ID: 12044
// Function ID: 12045
// Name: ConjurePreviewMode
// Dependencies: [5670, 3865, 1114, 2]
// Exports: getPreviewFrameSurfaceLabel

// Module 12044 (ConjurePreviewMode)
import intl2 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5670 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL] = _modDef3865.xI4N6Q;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef3865.oWMDh6;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN] = _modDef3865["0ICBnS"];
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export function getPreviewFrameSurfaceLabel(surface) {
  const intl = intl2.intl;
  return intl.string(obj[surface]);
}
