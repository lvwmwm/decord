// Module ID: 15893
// Function ID: 15894
// Name: frameToast
// Dependencies: [32, 2]
// Exports: canShowFrameToast

// Module 15893 (frameToast)
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const map = new Map();
let result = size.fileFinishedImporting("modules/rpc/helpers/frameToast.tsx");

export const FRAME_TOAST_VARIANTS = { message: "default", success: "success", failure: "critical" };
export function canShowFrameToast(iframeId) {
  let tmp15;
  const timestamp = Date.now();
  const tmp3 = map[Symbol.iterator]();
  while (tmp3 !== undefined) {
    let tmp6 = _slicedToArray(tmp4, 2);
    let first = tmp6[0];
    if (timestamp - tmp6[1].refilledAt >= 6000) {
      let deleteResult = map.delete(first);
    }
    continue;
  }
  const value = map.get(iframeId);
  if (null == value) {
    if (map.size >= 1000) {
      return false;
    } else {
      const obj2 = { tokens: 3, refilledAt: timestamp };
      const result = obj.set(iframeId, obj2);
      tmp15 = obj2;
    }
  } else {
    const _Math = Math;
    const rounded = Math.floor((timestamp - value.refilledAt) / 2000);
    tmp15 = value;
    if (rounded > 0) {
      const _Math2 = Math;
      value.tokens = Math.min(3, value.tokens + rounded);
      value.refilledAt = value.refilledAt + 2000 * rounded;
      tmp15 = value;
    }
  }
  let flag = 0 !== tmp15.tokens;
  if (flag) {
    tmp15.tokens = tmp15.tokens - 1;
    flag = true;
  }
  return flag;
}
