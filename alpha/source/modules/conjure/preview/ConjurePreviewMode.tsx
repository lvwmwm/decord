// Module ID: 11761
// Function ID: 11762
// Name: ConjurePreviewMode
// Dependencies: [5627, 3831, 1125, 2]
// Exports: getPreviewFrameSurfaceLabel

// Module 11761 (ConjurePreviewMode)
import intl2 from "intl" /* 1125 */;
import _modDef3831 from "module_3831" /* 3831 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5627 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL] = _modDef3831.xI4N6Q;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef3831.oWMDh6;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN] = _modDef3831["0ICBnS"];
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export const getPreviewFrameSurfaceLabel = function getPreviewFrameSurfaceLabel(surface) {
  const intl = intl2.intl;
  return intl.string(obj[surface]);
};
