// Module ID: 11718
// Function ID: 11719
// Name: ConjurePreviewMode
// Dependencies: [5587, 3820, 1128, 2]
// Exports: getPreviewFrameSurfaceLabel

// Module 11718 (ConjurePreviewMode)
import intl2 from "intl" /* 1128 */;
import _modDef3820 from "module_3820" /* 3820 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5587 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL] = _modDef3820.xI4N6Q;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef3820.oWMDh6;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN] = _modDef3820["0ICBnS"];
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export const getPreviewFrameSurfaceLabel = function getPreviewFrameSurfaceLabel(surface) {
  const intl = intl2.intl;
  return intl.string(obj[surface]);
};
