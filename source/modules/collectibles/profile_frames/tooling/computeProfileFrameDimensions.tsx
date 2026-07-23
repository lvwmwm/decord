// Module ID: 8250
// Function ID: 65113
// Name: maxOverflowOrFallback
// Dependencies: [8251, 8248, 8249, 2]
// Exports: computeProfileFrameDimensions

// Module 8250 (maxOverflowOrFallback)
function maxOverflowOrFallback(found, arg1) {
  let applyResult = arg1;
  if (found.length > 0) {
    const _Math = Math;
    const items = [];
    HermesBuiltin.arraySpread(found, 0);
    const _Math2 = Math;
    applyResult = HermesBuiltin.apply(items, Math);
  }
  return applyResult;
}
function stapleOverflow(arg0, arg1, arg2) {
  return Math.max(0, arg0 - (arg1 - arg2));
}
const result = require("ProfileFrameLayerAnchor").fileFinishedImporting("modules/collectibles/profile_frames/tooling/computeProfileFrameDimensions.tsx");

export const computeProfileFrameDimensions = function computeProfileFrameDimensions(items1) {
  INNER_WIDTH = INNER_WIDTH(8251).DefaultProfileFrameDimensions.INNER_WIDTH;
  const found = items1.filter((layer) => {
    layer = layer.layer;
    let tmp = layer.type === INNER_WIDTH(outer1_1[1]).ProfileFrameLayerType.STAPLE;
    if (tmp) {
      tmp = layer.anchor === INNER_WIDTH(outer1_1[2]).ProfileFrameLayerAnchor.TOP;
    }
    return tmp;
  });
  let tmp = maxOverflowOrFallback(items1.map((dims) => Math.round(Math.max(0, (dims.dims.width - INNER_WIDTH) / 2))), 0);
  const found1 = items1.filter((layer) => {
    layer = layer.layer;
    let tmp = layer.type === INNER_WIDTH(outer1_1[1]).ProfileFrameLayerType.STAPLE;
    if (tmp) {
      tmp = layer.anchor === INNER_WIDTH(outer1_1[2]).ProfileFrameLayerAnchor.BOTTOM;
    }
    return tmp;
  });
  const tmp2 = maxOverflowOrFallback(found.map((dims) => outer1_3(dims.dims.height, 716, INNER_WIDTH(outer1_1[0]).DefaultProfileFrameDimensions.OVERFLOW_TOP)), 0);
  return { innerWidth: INNER_WIDTH, overflowTop: maxOverflowOrFallback(found.map((dims) => outer1_3(dims.dims.height, 716, INNER_WIDTH(outer1_1[0]).DefaultProfileFrameDimensions.OVERFLOW_TOP)), 0), overflowBottom: maxOverflowOrFallback(found1.map((dims) => outer1_3(dims.dims.height, 424, INNER_WIDTH(outer1_1[0]).DefaultProfileFrameDimensions.OVERFLOW_BOTTOM)), 0), overflowHorizontal: tmp };
};
