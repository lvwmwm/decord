// Module ID: 15423
// Function ID: 15424
// Name: useHasExpiredShopBlocks
// Dependencies: [32, 19, 1074, 6992, 2]
// Exports: useHasExpiredShopBlocks

// Module 15423 (useHasExpiredShopBlocks)
import Constants from "Constants" /* 1074 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let _slicedToArray = _slicedToArray_mod;
({ useEffect: c3, useState: closure_4 } = react);
const MAX_TIMEOUT_MS = Constants.MAX_TIMEOUT_MS;
const result = size.fileFinishedImporting("modules/collectibles/hooks/useHasExpiredShopBlocks.tsx");

export const useHasExpiredShopBlocks = (arg0, arg1, arg2) => {
  let closure_2;
  let closure_3;
  let first;
  let closure_0 = arg0;
  let closure_1 = arg1;
  _slicedToArray = arg2;
  [first, closure_3] = closure_4(false);
  const items = [arg1, arg2, arg0];
  let tmp3 = closure_3(() => {
    let timeout;
    let time1 = null;
    const item = timeout.forEach((type) => {
      const tmp = time1;
      const tmp2 = closure_2_1;
      if (type.type === time1(closure_2_1[3]).ShopBlockType.IMMERSIVE_BANNER) {
        let time = null;
        if (null != type.endTime) {
          const endTime2 = type.endTime;
          time = endTime2.getTime();
        }
        time1 = time;
      } else {
        time1 = null;
        if (type.type === tmp(tmp2[3]).ShopBlockType.COUNTDOWN_TIMER) {
          const endTime = type.endTime;
          time1 = endTime.getTime();
        }
      }
      let tmp5 = null == time1;
      if (!tmp5) {
        tmp5 = null != time1 && time1 < time1;
        const tmp6 = null != time1 && time1 < time1;
      }
    });
    let tmp2 = time1;
    const tmp3 = closure_1;
    if (!tmp3) {
      const tmp4 = closure_2;
      if (!tmp4) {
        if (null != tmp2) {
          let tmp5 = globalThis;
          const _Date = Date;
          const diff = tmp2 - Date.now();
          if (diff <= 0) {
            closure_3(true);
          } else {
            closure_3(false);
            const _setTimeout = setTimeout;
            const _Math = Math;
            timeout = setTimeout(() => {
              closure_1_3(true);
            }, Math.min(MAX_TIMEOUT_MS, diff));
            return () => clearTimeout(closure_0);
          }
        }
      }
    }
    closure_3(false);
  }, items);
  return first;
};
