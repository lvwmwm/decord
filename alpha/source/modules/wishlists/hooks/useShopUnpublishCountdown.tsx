// Module ID: 15002
// Function ID: 15003
// Name: useShopUnpublishCountdown
// Dependencies: [32, 19, 11121, 2]
// Exports: default, useHasShopUnpublishCountdown

// Module 15002 (useShopUnpublishCountdown)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const f107283 = (arg0) => arg0 + 1;
let c4 = 2147483647;
const result = size.fileFinishedImporting("modules/wishlists/hooks/useShopUnpublishCountdown.tsx");

export default function useShopUnpublishCountdown(getTime) {
  let closure_1;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let time;
  dependencyMap = time(react.useReducer(f107283, 0), 2)[1];
  time = undefined;
  const obj = react;
  if (getTime != null) {
    time = getTime.getTime();
  }
  const items = [time, flag];
  const effect = obj.useEffect(() => {
    let closure_0;
    let diff;
    let tick;
    if (null != tick) {
      let timeout;
      const tmp2 = _false;
      diff = tmp - _false(diff[2]).SHOP_UNPUBLISH_LABEL_THRESHOLD_MS;
      tick = function tick() {
        const timestamp = Date.now();
        if (timestamp < diff) {
          const _setTimeout2 = setTimeout;
          const _Math2 = Math;
          let timeout = setTimeout(tick, Math.min(tmp2 - timestamp, c4));
        } else {
          diff();
          if (timestamp < time) {
            let num = 60000;
            const _setTimeout = setTimeout;
            const _Math = Math;
            const tmp6 = tick;
            if (!c0) {
              num = c4;
            }
            timeout = _setTimeout(tmp6, min(num, tmp5 - timestamp));
          }
        }
      };
      const tmp5 = globalThis;
      const _Date = Date;
      let timestamp = Date.now();
      if (timestamp < diff) {
        let _setTimeout2 = setTimeout;
        let _Math2 = Math;
        timeout = setTimeout(tick, Math.min(diff - timestamp, closure_1_4));
      } else {
        diff();
        if (timestamp < tick) {
          let num = 60000;
          let _setTimeout = setTimeout;
          let _Math = Math;
          if (!timeout) {
            num = closure_1_4;
          }
          timeout = _setTimeout(tick, min(num, tmp - timestamp));
        }
      }
      return () => clearTimeout(closure_0);
    }
  }, items);
  const obj2 = flag(11121);
  return obj2.getShopUnpublishCountdown(getTime);
};
export function useHasShopUnpublishCountdown(memo1) {
  let _false;
  let closure_1;
  const tmp = _require;
  let tmp2 = dependencyMap;
  const obj = require("WishlistShopUnpublishUtils");
  const nextFutureShopUnpublishedAt = obj.getNextFutureShopUnpublishedAt(memo1);
  _require = false;
  let time;
  dependencyMap = time(react.useReducer(f107283, 0), 2)[1];
  time = undefined;
  const obj3 = react;
  if (nextFutureShopUnpublishedAt != null) {
    time = nextFutureShopUnpublishedAt.getTime();
  }
  const items = [time, false];
  const effect = obj3.useEffect(() => {
    let closure_0;
    let diff;
    let tick;
    if (null != tick) {
      let timeout;
      const tmp2 = _false;
      diff = tmp - _false(diff[2]).SHOP_UNPUBLISH_LABEL_THRESHOLD_MS;
      tick = function tick() {
        const timestamp = Date.now();
        if (timestamp < diff) {
          const _setTimeout2 = setTimeout;
          const _Math2 = Math;
          let timeout = setTimeout(tick, Math.min(tmp2 - timestamp, c4));
        } else {
          diff();
          if (timestamp < time) {
            let num = 60000;
            const _setTimeout = setTimeout;
            const _Math = Math;
            const tmp6 = tick;
            if (!c0) {
              num = c4;
            }
            timeout = _setTimeout(tmp6, min(num, tmp5 - timestamp));
          }
        }
      };
      const tmp5 = globalThis;
      const _Date = Date;
      let timestamp = Date.now();
      if (timestamp < diff) {
        let _setTimeout2 = setTimeout;
        let _Math2 = Math;
        timeout = setTimeout(tick, Math.min(diff - timestamp, closure_1_4));
      } else {
        diff();
        if (timestamp < tick) {
          let num = 60000;
          let _setTimeout = setTimeout;
          let _Math = Math;
          if (!timeout) {
            num = closure_1_4;
          }
          timeout = _setTimeout(tick, min(num, tmp - timestamp));
        }
      }
      return () => clearTimeout(closure_0);
    }
  }, items);
  const tmpResult = tmp(11121);
  return null != tmpResult.getShopUnpublishCountdown(nextFutureShopUnpublishedAt);
}
