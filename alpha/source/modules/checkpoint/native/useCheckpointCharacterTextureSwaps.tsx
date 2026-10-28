// Module ID: 13198
// Function ID: 13199
// Name: useCheckpointCharacterTextureSwaps
// Dependencies: [32, 5, 19, 5080, 558, 576, 2]

// Module 13198 (useCheckpointCharacterTextureSwaps)
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, c5, c6, dependencyMap, map, map1, set;

let obj = function _loadImage() {
  obj = _asyncToGenerator(async (arg0) => {
    let c1;
    let c2;
    let c3;
    let closure_0 = arg0;
    const RiveImages = require("DataBindByName").RiveImages;
    await RiveImages.loadFromURLAsync(closure_0);
    return arg1;
  });
  return obj(...arguments);
};
function swapTextures() {
  return obj(...arguments);
}
obj = function _swapTextures() {
  obj = _asyncToGenerator(async function(arg0, value, arg2, arg3) {
    function releaseLater(arg0) {
      closure_0 = arg0;
      const timerId = setTimeout(() => closure_0.forEach((dispose) => dispose.dispose()), 1000);
    }
    let closure_0 = arg0;
    let closure_2 = arg2;
    let closure_3 = arg3;
    if (c6 === 2) {
      c6 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_6;
        let data;
        c6 = 2;
        const tmp4 = c5;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp;
            closure_2 = closure_3;
            map1 = undefined;
            closure_6 = undefined;
            data = undefined;
            const _Map2 = Map;
            const self3 = this;
            const self4 = this;
            map = new Map();
            const _Set = Set;
            const self5 = this;
            const self6 = this;
            set = new Set();
            const _Object = Object;
            const entries = Object.entries(closure_2);
            const item = entries.forEach((item) => {
              let tmp;
              [tmp, ] = item;
              if (closure_1_1.get(tmp) !== tmp2.uri) {
                const result = closure_1_3.set(tmp, tmp2.uri);
                set.add(tmp2.uri);
              }
            });
            if (0 !== map.size) {
              const _Map = Map;
              const self = this;
              const self2 = this;
              map1 = new Map();
              const tmp15 = map1;
              const _Array = Array;
              c5 = 1;
              c6 = 1;
              let obj4 = {
                value: Promise.all(Array.from(set, (() => {
                            closure_0 = closure_1_3(function*(arg0, value) {
                              function loadImage() {
                                return closure_1_5(...arguments);
                              }
                              closure_0 = arg0;
                              if (c4 === 2) {
                                c4 = 3;
                                throw new TypeError("Generator functions may not be called on executing generators");
                              } else if (tmp3 === 3) {
                                if (arg0 === 1) {
                                  throw value;
                                } else if (arg0 === 2) {
                                  const obj2 = { value, done: true };
                                  return obj2;
                                } else {
                                  return { value: "IconComponent", done: null };
                                }
                              } else {
                                try {
                                  c4 = 2;
                                  if (0 === c3) {
                                    if (arg0 === 1) {
                                      c4 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      c4 = 3;
                                      const obj3 = { value, done: true };
                                      return obj3;
                                    } else {
                                      closure_2 = tmp4;
                                      closure_1 = undefined;
                                      c3 = 1;
                                      c4 = 1;
                                      const obj4 = { value: loadImage(closure_0), done: false };
                                      return obj4;
                                    }
                                  } else if (arg0 === 1) {
                                    c4 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    c4 = 3;
                                    obj = { value, done: true };
                                    return obj;
                                  } else {
                                    closure_1 = value;
                                    if (null != closure_1) {
                                      const result = closure_1_5.set(closure_0, closure_1);
                                    }
                                    c4 = 3;
                                    return { value: "IconComponent", done: null };
                                  }
                                } catch (tmp15) {
                                  c4 = 3;
                                  throw tmp15;
                                }
                              }
                            });
                            return function() {
                              return closure_0(...arguments);
                            };
                          })())),
                done: false
              };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          const _Array2 = Array;
          closure_6 = Array.from(map1.values());
          if (closure_2()) {
            const item1 = closure_6.forEach((dispose) => dispose.dispose());
          } else {
            data = {};
            const item2 = map.forEach((item, index) => {
              const value = closure_1_5.get(item);
              if (null != value) {
                obj = { image: value };
                data[index] = obj;
                const result = closure_1_1.set(index, item);
              }
            });
            obj = { data };
            let result = closure_0.updateReferencedAssets(obj);
            const tmp11 = releaseLater(closure_6);
          }
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp16) {
        c6 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCheckpointCharacterTextureSwaps(arg0, arg1, arg2) {
  let closure_0;
  let closure_1;
  let first;
  let tmp5;
  _require = arg0;
  dependencyMap = arg1;
  let closure_2 = arg2;
  obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map();
    cResult[0] = map;
    first = map;
  } else {
    first = cResult[0];
  }
  const ref = react.useRef(first);
  if (cResult[1] !== arg2) {
    const fn = function p() {
      map = new Map();
      const entries = Object.entries(closure_2);
      const item = entries.forEach((item) => {
        const tmp = closure_2_2(item, 2);
        return map.set(tmp[0], tmp[1].source.uri);
      });
      ref.current = map;
    };
    cResult[1] = arg2;
    cResult[2] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] === arg0) {
    let tmp6;
    if (cResult[4] === arg2) {
      tmp6 = cResult[5];
    }
    const effect = obj2.useEffect(tmp5, tmp6);
    if (cResult[6] === arg0) {
      let tmp8;
      let tmp9;
      if (cResult[7] === arg1) {
        tmp8 = cResult[8];
        tmp9 = cResult[9];
      }
      const effect1 = obj2.useEffect(tmp8, tmp9);
    }
    const fn2 = function h() {
      if (null != closure_0) {
        let c0 = false;
        swapTextures(closure_0, ref.current, closure_1, () => c0);
        return () => {
          c0 = true;
        };
      }
    };
    const items = [arg0, arg1];
    cResult[6] = arg0;
    cResult[7] = arg1;
    cResult[8] = fn2;
    cResult[9] = items;
    tmp9 = items;
    tmp8 = fn2;
  }
  const items1 = [arg0, arg2];
  cResult[3] = arg0;
  cResult[4] = arg2;
  cResult[5] = items1;
  tmp6 = items1;
}) : (function useCheckpointCharacterTextureSwaps(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  const useRef = react.useRef;
  map = new Map();
  const ref = useRef(map);
  const items = [arg0, arg2];
  const effect = react.useEffect(() => {
    map = new Map();
    const entries = Object.entries(closure_2);
    const item = entries.forEach((item) => {
      let tmp;
      [tmp, ] = item;
      return map.set(tmp, tmp2.uri);
    });
    ref.current = map;
  }, items);
  const items1 = [arg0, arg1];
  const effect1 = react.useEffect(() => {
    if (null != closure_0) {
      let c0 = false;
      swapTextures(closure_0, ref.current, closure_1, () => c0);
      return () => {
        c0 = true;
      };
    }
  }, items1);
});
let result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointCharacterTextureSwaps.tsx");

export const useCheckpointCharacterTextureSwaps = tmp2;
