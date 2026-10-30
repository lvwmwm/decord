// Module ID: 9365
// Function ID: 9366
// Name: useGameProfileMediaDimensions
// Dependencies: [32, 19, 1452, 2]
// Exports: useGameProfileMediaDimensions

// Module 9365 (useGameProfileMediaDimensions)
import LRUCacheDefault from "LRUCache" /* 1452 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

let map;

function getCachedDimensions() {
  map = new Map();
  const item = closure_2.forEach((item, index) => map.set(index, item));
  return map;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let tmp2 = new LRUCacheDefault({ max: 100 });
let closure_2 = tmp2;
let size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileMediaDimensions.tsx");

export function useGameProfileMediaDimensions(width) {
  let closure_1;
  let items;
  _slicedToArray = width;
  let tmp = _slicedToArray(react.useState(getCachedDimensions), 2);
  react = tmp[1];
  let obj = {
    dimensions: tmp[0],
    recordDimensions: react.useCallback((arg0, width) => {
      let closure_0 = arg0;
      let tmp = closure_0;
      let tmp2;
      if (Number.isFinite(width.width)) {
        const _Number = Number;
        if (Number.isFinite(width.height)) {
          if (width.width > 0) {
            if (width.height > 0) {
              const tmp3 = null;
              tmp2 = width;
              if (null != tmp) {
                const _Math = Math;
                let result = tmp / Math.max(width.width, width.height);
                size = { width: Math.max(1, Math.round(width.width * result)), height: Math.max(1, Math.round(width.height * result)) };
                const _Math2 = Math;
                const _Math3 = Math;
                const _Math4 = Math;
                const _Math5 = Math;
                tmp2 = size;
              }
            }
          }
        }
      }
      if (null != tmp2) {
        let value = closure_2.get(arg0);
        const obj = closure_2;
        if (value == null) {
          value = tmp2;
        }
        const result1 = obj.set(arg0, value);
        closure_1(function(get) {
          let result;
          size = get.get(closure_0);
          width = undefined;
          const tmp = closure_0;
          if (size != null) {
            width = size.width;
          }
          if (width !== value.width) {
            const _Map = Map;
            const self = this;
            const self2 = this;
            map = new Map(get);
            result = map.set(tmp, tmp3);
          } else {
            result = get;
          }
          return result;
        });
      }
    }, items)
  };
  items = [width];
  return obj;
}
