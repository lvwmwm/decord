// Module ID: 7589
// Function ID: 7590
// Name: useAvatarColor
// Dependencies: [32, 5, 19, 4825, 560, 1248, 1476, 4683, 504, 6972, 2]
// Exports: default, maybeFetchColors, useAvatarColors, useHasFetchedColors

// Module 7589 (useAvatarColor)
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c2, c5, c6, dependencyMap;

const f84687 = () => {
  let tmp2 = null != closure_0;
  const tmp = closure_0;
  if (tmp2) {
    tmp2 = null == closure_2;
  }
  if (tmp2) {
    fetchColors(tmp);
  }
};
function hasFetchedColors(iconURL) {
  return null != obj.getState().palette[iconURL];
}
let obj = function _maybeFetchColors() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
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
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const tmp4 = closure_0;
            if (!hasFetchedColors(closure_0)) {
              c2 = 1;
              c1 = 1;
              const obj4 = { value: fetchColors(tmp4), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        }
        c1 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp7) {
        c1 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
function fetchColors() {
  return obj(...arguments);
}
obj = function _fetchColors() {
  let state;
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_2;
    let obj6;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        let closure_1;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_1 = undefined;
            let complimentaryPaletteForColor;
            const tmp30 = closure_0;
            if (!state.getState().fetching[closure_0]) {
              const obj5 = require("react-native");
              obj5.batchUpdates(() => state.setState((fetching) => {
                let obj2;
                obj = { fetching: obj2 };
                obj2 = {};
                const merged = Object.assign(fetching.fetching);
                obj2[closure_1_0] = true;
                return obj;
              }));
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj8 = { value: obj6.getPaletteForAvatar(tmp30), done: false };
              obj6 = require("ImageUtils");
              return obj8;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          const obj4 = closure_130_0(closure_130_2[5]);
          obj4.batchUpdates(() => state.setState((fetching) => {
            let obj2;
            obj = { fetching: obj2 };
            obj2 = {};
            const merged = Object.assign(fetching.fetching);
            obj2[closure_1_0] = false;
            return obj;
          }));
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_1 = value;
          obj = closure_130_0(closure_130_2[7]);
          complimentaryPaletteForColor = obj.getComplimentaryPaletteForColor(closure_1[0]);
          let obj2 = closure_130_0(closure_130_2[5]);
          obj2.batchUpdates(() => {
            let args;
            state.setState((fetching) => {
              let obj2;
              let obj3;
              obj = { fetching: obj2, palette: obj3 };
              obj2 = {};
              const merged = Object.assign(fetching.fetching);
              obj2[closure_1_0] = false;
              obj3 = {};
              const merged1 = Object.assign(fetching.palette);
              const items = [...closure_1_2];
              obj3[closure_1_0] = items;
              return obj;
            });
          });
          c4 = 0;
        }
        c6 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp24) {
        let closure_3 = tmp24;
        if (0 === c4) {
          c6 = 3;
          throw tmp24;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = module_560.create(() => ({ palette: {}, fetching: {} }));
const result = size.fileFinishedImporting("modules/avatar/useAvatarColor.tsx");

export default function useAvatarColor(arg0, arg1) {
  let closure_0;
  let closure_2;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  _require = arg0;
  if (flag === undefined) {
    flag = true;
  }
  let tmp = obj((arg0) => {
    let tmp2;
    if (null != closure_0) {
      tmp2 = arg0.palette[tmp];
    }
    return tmp2;
  });
  dependencyMap = tmp;
  obj = require("get initialized");
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let num = 1;
    if (flag) {
      num = 1;
      if (AccessibilityStore.desaturateUserColors) {
        num = AccessibilityStore.saturation;
      }
    }
    return num;
  });
  const items1 = [arg0, tmp];
  const effect = react.useEffect(f84687, items1);
  const items2 = [tmp, stateFromStores];
  let memo = react.useMemo(() => {
    let mapped;
    const arr = closure_2;
    if (closure_2 != null) {
      mapped = arr.map((item) => {
        let h;
        let l;
        let s;
        let tmp;
        let tmp2;
        let tmp3;
        [tmp, tmp2, tmp3] = item;
        obj = flag(closure_2[9])({ r: tmp, g: tmp2, b: tmp3 });
        ({ h, s, l } = obj.toHsl());
        const obj2 = { h, s: s * stateFromStores, l };
        obj.toHsl();
        const obj3 = flag(closure_2[9])(obj2);
        return obj3.toHexString();
      });
    }
    return mapped;
  }, items2);
  if (memo == null) {
    const items3 = [arg1, arg1];
    memo = items3;
  }
  return stateFromStores(memo, 1)[0];
};
export const useColorStore = obj;
export { hasFetchedColors };
export const maybeFetchColors = function maybeFetchColors() {
  return obj(...arguments);
};
export const useHasFetchedColors = function useHasFetchedColors(arg0) {
  let closure_0 = arg0;
  return !obj((arg0) => null != closure_0 && arg0.fetching[tmp]);
};
export const useAvatarColors = function useAvatarColors(pendingAvatarSrc, PRIMARY_530) {
  let closure_2;
  let flag;
  _require = pendingAvatarSrc;
  const tmp = obj((arg0) => {
    let tmp2;
    if (null != closure_0) {
      tmp2 = arg0.palette[tmp];
    }
    return tmp2;
  });
  dependencyMap = tmp;
  obj = require("get initialized");
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let num = 1;
    if (flag) {
      num = 1;
      if (AccessibilityStore.desaturateUserColors) {
        num = AccessibilityStore.saturation;
      }
    }
    return num;
  });
  const items1 = [pendingAvatarSrc, tmp];
  const effect = react.useEffect(f84687, items1);
  const items2 = [tmp, stateFromStores];
  let memo = react.useMemo(() => {
    let mapped;
    const arr = closure_2;
    if (closure_2 != null) {
      mapped = arr.map((item) => {
        let h;
        let l;
        let s;
        let tmp;
        let tmp2;
        let tmp3;
        [tmp, tmp2, tmp3] = item;
        obj = flag(closure_2[9])({ r: tmp, g: tmp2, b: tmp3 });
        ({ h, s, l } = obj.toHsl());
        const obj2 = { h, s: s * stateFromStores, l };
        obj.toHsl();
        const obj3 = flag(closure_2[9])(obj2);
        return obj3.toHexString();
      });
    }
    return mapped;
  }, items2);
  if (memo == null) {
    const items3 = [PRIMARY_530, PRIMARY_530];
    memo = items3;
  }
  return memo;
};
