// Module ID: 13845
// Function ID: 13846
// Name: useCheckpointCharacterTextureSwaps
// Dependencies: [32, 5, 19, 2]
// Exports: useCheckpointCharacterTextureSwaps

// Module 13845 (useCheckpointCharacterTextureSwaps)
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c4, map, map1, map2, set;

let obj = function _swapTextures() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let c0;
    let c1;
    let c2;
    let c3;
    let v3;
    let closure_0 = arg0;
    if (1 === tmp4) {
      if (arg0 === 1) {
        v3 = 3;
        throw value;
      } else if (arg0 === 2) {
        v3 = 3;
        let obj4 = { value, done: true };
        return obj4;
      } else {
        const _Map3 = Map;
        const self7 = this;
        const self8 = this;
        map = new Map();
        const _Object = Object;
        const entries = Object.entries(c2);
        const item = entries.forEach((item) => {
          let tmp;
          [tmp, ] = item;
          if (closure_1_1.get(tmp) !== tmp2.uri) {
            const result = closure_1_4.set(tmp, tmp2.uri);
          }
        });
        if (0 !== map.size) {
          const _Map2 = Map;
          const self3 = this;
          const self4 = this;
          map1 = new Map();
          const _Array2 = Array;
          const _Set = Set;
          const self5 = this;
          const self6 = this;
          set = new Set(map.values());
          c2 = 2;
          v3 = 1;
          const obj5 = {
            value: all(from(set, (() => {
                    closure_0 = closure_1_1(function*(arg0, value) {
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
                          return { value: "HermesInternal", done: null };
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
                              let closure_2 = tmp4;
                              closure_1 = undefined;
                              c3 = 1;
                              c4 = 1;
                              const obj4 = { value: closure_0.load(closure_0), done: false };
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
                            return { value: "HermesInternal", done: null };
                          }
                        } catch (tmp16) {
                          c4 = 3;
                          throw tmp16;
                        }
                      }
                    });
                    return function() {
                      return closure_0(...arguments);
                    };
                  })())),
            done: false
          };
          return obj5;
        }
      }
    } else if (arg0 === 1) {
      v3 = 3;
      throw value;
    } else if (arg0 === 2) {
      v3 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      if (!v3()) {
        const tmp6 = globalThis;
        const _Map = Map;
        const self = this;
        const self2 = this;
        map2 = new Map();
        const item1 = map.forEach((item, index) => {
          const value = closure_1_5.get(item);
          if (null != value) {
            const result = closure_1_6.set(index, value);
            const result1 = closure_1_1.set(index, item);
          }
        });
        c0.swap(map2);
      }
      const tmp16 = globalThis;
      const _Array = Array;
      c0.release(Array.from(map1.values()));
    }
    await "HermesInternal";
    if (arg0 === 1) {
      throw value;
    }
    if (arg0 === 2) {
      return value;
    }
    let closure_1 = tmp;
    ({ textureManager: c0, shownUrls: c1, referencedAssets: c2, isStale: c3 } = closure_0);
    return "flexDirection";
  });
  return obj(...arguments);
};
let result = size.fileFinishedImporting("modules/checkpoint/character/useCheckpointCharacterTextureSwaps.tsx");

export function useCheckpointCharacterTextureSwaps(textureManager) {
  textureManager = textureManager.textureManager;
  const referencedAssets = textureManager.referencedAssets;
  const initialReferencedAssets = textureManager.initialReferencedAssets;
  const useRef = initialReferencedAssets.useRef;
  map = new Map();
  let closure_3 = useRef(map);
  let tmp2 = textureManager(initialReferencedAssets.useState(initialReferencedAssets), 2);
  let closure_4 = tmp2[1];
  let items = [textureManager, initialReferencedAssets];
  const first = tmp2[0];
  const effect = initialReferencedAssets.useEffect(() => {
    obj = initialReferencedAssets;
    const tmp = closure_3;
    const _Map = Map;
    const _Object = Object;
    if (initialReferencedAssets == null) {
      obj = {};
    }
    const entries1 = entries(obj);
    const _Map1 = new _Map(entries1.map((item) => {
      let tmp;
      [tmp, ] = item;
      const items = [tmp, tmp2.uri];
      return items;
    }));
    tmp.current = _Map1;
  }, items);
  const items1 = [textureManager, referencedAssets];
  const effect1 = initialReferencedAssets.useEffect(() => {
    function swap() {
      return closure_0(...arguments);
    }
    if (null != c0) {
      c0 = false;
      let closure_0 = referencedAssets(function*(arg0, value) {
        function swapTextures() {
          return closure_1_3(...arguments);
        }
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                textureManager = tmp3;
                const obj4 = {
                  textureManager,
                  shownUrls: ref.current,
                  referencedAssets,
                  isStale() {
                            return textureManager;
                          }
                };
                c1 = 1;
                c2 = 1;
                const obj5 = { value: swapTextures(obj4), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const tmp5 = textureManager;
              if (!tmp5) {
                closure_2_4(referencedAssets);
              }
              c2 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp12) {
            c2 = 3;
            throw tmp12;
          }
        }
      });
      const tmp2 = swap();
      return () => {
        c0 = true;
      };
    }
  }, items1);
  return first === referencedAssets;
}
