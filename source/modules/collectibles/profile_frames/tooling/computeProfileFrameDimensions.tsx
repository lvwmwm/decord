// Module ID: 8244
// Function ID: 65076
// Name: maxOverflowOrFallback
// Dependencies: []
// Exports: computeProfileFrameDimensions

// Module 8244 (maxOverflowOrFallback)
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
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/collectibles/profile_frames/tooling/computeProfileFrameDimensions.tsx");

export const computeProfileFrameDimensions = function computeProfileFrameDimensions(items1) {
  const INNER_WIDTH = require(dependencyMap[0]).DefaultProfileFrameDimensions.INNER_WIDTH;
  const require = INNER_WIDTH;
  const found = items1.filter((layer) => {
    layer = layer.layer;
    let tmp = layer.type === INNER_WIDTH(closure_1[1]).ProfileFrameLayerType.STAPLE;
    if (tmp) {
      tmp = layer.anchor === INNER_WIDTH(closure_1[2]).ProfileFrameLayerAnchor.TOP;
    }
    return tmp;
  });
  const tmp = maxOverflowOrFallback(items1.map((dims) => Math.round(Math.max(0, (dims.dims.width - INNER_WIDTH) / 2))), 0);
  const found1 = items1.filter((layer) => {
    layer = layer.layer;
    let tmp = layer.type === INNER_WIDTH(closure_1[1]).ProfileFrameLayerType.STAPLE;
    if (tmp) {
      tmp = layer.anchor === INNER_WIDTH(closure_1[2]).ProfileFrameLayerAnchor.BOTTOM;
    }
    return tmp;
  });
  const tmp2 = maxOverflowOrFallback(found.map((dims) => callback(dims.dims.height, 716, INNER_WIDTH(closure_1[0]).DefaultProfileFrameDimensions.OVERFLOW_TOP)), 0);
  return { innerWidth: INNER_WIDTH, overflowTop: maxOverflowOrFallback(found.map((dims) => callback(dims.dims.height, 716, INNER_WIDTH(closure_1[0]).DefaultProfileFrameDimensions.OVERFLOW_TOP)), 0), overflowBottom: maxOverflowOrFallback(found1.map((dims) => callback(dims.dims.height, 424, INNER_WIDTH(closure_1[0]).DefaultProfileFrameDimensions.OVERFLOW_BOTTOM)), 0), overflowHorizontal: tmp };
};
