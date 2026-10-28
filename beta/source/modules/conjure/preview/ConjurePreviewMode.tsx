// Module ID: 11904
// Function ID: 11905
// Name: ConjurePreviewMode
// Dependencies: [5658, 3862, 1128, 2]
// Exports: getPreviewFrameSurfaceLabel

// Module 11904 (ConjurePreviewMode)
import intl2 from "intl" /* 1128 */;
import _modDef3862 from "module_3862" /* 3862 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5658 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL] = _modDef3862.xI4N6Q;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL] = _modDef3862.oWMDh6;
obj[EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN] = _modDef3862["0ICBnS"];
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewMode.tsx");

export const CONJURE_PREVIEW_MODE_ORDER = ["frame", "widget", "overlay", "bot"];
export const getPreviewFrameSurfaceLabel = function getPreviewFrameSurfaceLabel(surface) {
  const intl = intl2.intl;
  return intl.string(obj[surface]);
};
