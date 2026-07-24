// Module ID: 14526
// Function ID: 110920
// Name: useHasExpiredShopBlocks
// Dependencies: [57, 31, 653, 6805, 2]
// Exports: useHasExpiredShopBlocks

// Module 14526 (useHasExpiredShopBlocks)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { MAX_TIMEOUT_MS } from "ME";

let closure_3;
let closure_4;
const require = arg1;
({ useEffect: closure_3, useState: closure_4 } = result);
result = require("ME").fileFinishedImporting("modules/collectibles/hooks/useHasExpiredShopBlocks.tsx");

export const useHasExpiredShopBlocks = (arg0, arg1, arg2) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const callback = arg2;
  let tmp = callback(callback3(false), 2);
  const callback2 = tmp[1];
  const items = [arg1, arg2, arg0];
  callback2(() => {
    const tmp = (function getNextBlockExpiration(closure_0) {
      let c0 = null;
      const item = closure_0.forEach((type) => {
        if (type.type === _null(6805).ShopBlockType.IMMERSIVE_BANNER) {
          let time = null;
          if (null != type.endTime) {
            const endTime2 = type.endTime;
            time = endTime2.getTime();
          }
          let time1 = time;
        } else {
          time1 = null;
          if (type.type === _null(6805).ShopBlockType.COUNTDOWN_TIMER) {
            const endTime = type.endTime;
            time1 = endTime.getTime();
          }
        }
        let tmp5 = null == time1;
        if (!tmp5) {
          let tmp6 = null != time1;
          if (tmp6) {
            tmp6 = time1 < time1;
          }
          tmp5 = tmp6;
        }
      });
      return c0;
    })(timeout);
    if (!closure_1) {
      if (!_slicedToArray) {
        if (null != tmp) {
          const _Date = Date;
          const diff = tmp - Date.now();
          if (diff <= 0) {
            callback(true);
          } else {
            callback(false);
            const _setTimeout = setTimeout;
            const _Math = Math;
            timeout = setTimeout(() => {
              outer1_3(true);
            }, Math.min(outer1_5, diff));
            return () => clearTimeout(closure_0);
          }
        }
      }
    }
    callback(false);
  }, items);
  return tmp[0];
};
