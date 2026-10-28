// Module ID: 9347
// Function ID: 9348
// Name: useGameProfileMediaDimensions
// Dependencies: [32, 19, 1456, 558, 576, 2]

// Module 9347 (useGameProfileMediaDimensions)
import LRUCacheDefault from "LRUCache" /* 1456 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, map;

function getCachedDimensions() {
  map = new Map();
  const item = closure_4.forEach((item, index) => map.set(index, item));
  return map;
}
let tmp2 = new LRUCacheDefault({ max: 100 });
let closure_4 = tmp2;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameProfileMediaDimensions(arg0) {
  let tmp3;
  let tmp4;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(5);
  let tmp2 = _slicedToArray(react.useState(getCachedDimensions), 2);
  [tmp3, dependencyMap] = tmp2;
  if (cResult[0] !== arg0) {
    const fn = function h(arg0, width) {
      closure_0 = arg0;
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
        let value = closure_4.get(arg0);
        const obj = closure_4;
        if (value == null) {
          value = tmp2;
        }
        const result1 = obj.set(arg0, value);
        dependencyMap(function(get) {
          let result;
          size = get.get(closure_0);
          let width;
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
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp3) {
    let tmp5;
    if (cResult[3] === tmp4) {
      tmp5 = cResult[4];
    }
    return tmp5;
  }
  const obj2 = { dimensions: tmp3, recordDimensions: tmp4 };
  cResult[2] = tmp3;
  cResult[3] = tmp4;
  cResult[4] = obj2;
  tmp5 = obj2;
}) : (function useGameProfileMediaDimensions(arg0) {
  let items;
  let closure_0 = arg0;
  let tmp = _slicedToArray(react.useState(getCachedDimensions), 2);
  let closure_1 = tmp[1];
  let obj = {
    dimensions: tmp[0],
    recordDimensions: react.useCallback((arg0, width) => {
      closure_0 = arg0;
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
        let value = closure_4.get(arg0);
        const obj = closure_4;
        if (value == null) {
          value = tmp2;
        }
        const result1 = obj.set(arg0, value);
        closure_1(function(get) {
          let result;
          size = get.get(closure_0);
          let width;
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
  items = [arg0];
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileMediaDimensions.tsx");

export const useGameProfileMediaDimensions = tmp3;
