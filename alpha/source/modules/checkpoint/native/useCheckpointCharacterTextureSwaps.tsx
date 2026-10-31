// Module ID: 13617
// Function ID: 13618
// Name: useCheckpointCharacterTextureSwaps
// Dependencies: [32, 5, 19, 5090, 2]
// Exports: useCheckpointCharacterTextureSwaps

// Module 13617 (useCheckpointCharacterTextureSwaps)
import DataBindByName from "DataBindByName" /* 5090 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c0, c4, c5, c6, closure_1, map, map1, set;

let obj = function _loadImage() {
  obj = _asyncToGenerator(async (arg0) => {
    let c1;
    let c2;
    let c3;
    let closure_0 = arg0;
    const RiveImages = DataBindByName.RiveImages;
    await RiveImages.loadFromURLAsync(closure_0);
    return arg1;
  });
  return obj(...arguments);
};
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
                                  return { value: "HermesInternal", done: "HermesInternal" };
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
                                    return { value: "HermesInternal", done: "HermesInternal" };
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
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp16) {
        c6 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
let react = react_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointCharacterTextureSwaps.tsx");

export function useCheckpointCharacterTextureSwaps(file) {
  let closure_4;
  file = file.file;
  const referencedAssets = file.referencedAssets;
  const initialReferencedAssets = file.initialReferencedAssets;
  react = undefined;
  const useRef = react.useRef;
  map = new Map();
  let closure_3 = useRef(map);
  let tmp2 = initialReferencedAssets(react.useState(initialReferencedAssets), 2);
  react = tmp2[1];
  const items = [file, initialReferencedAssets];
  const first = tmp2[0];
  const effect = react.useEffect(() => {
    map = new Map();
    const entries = Object.entries(initialReferencedAssets);
    const item = entries.forEach((item) => {
      let tmp;
      [tmp, ] = item;
      return map.set(tmp, tmp2.uri);
    });
    closure_3.current = map;
  }, items);
  const items1 = [file, referencedAssets];
  const effect1 = react.useEffect(() => {
    function swap() {
      return closure_0(...arguments);
    }
    if (null != c0) {
      c0 = false;
      let closure_0 = closure_3(function*(arg0, value) {
        function swapTextures() {
          return closure_1_6(...arguments);
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
                closure_0 = tmp3;
                c1 = 1;
                c2 = 1;
                const obj4 = { value: swapTextures(closure_0, ref.current, referencedAssets, () => closure_1_0), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const tmp5 = closure_0;
              if (!tmp5) {
                closure_2_4(referencedAssets);
              }
              c2 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
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
