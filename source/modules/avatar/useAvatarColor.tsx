// Module ID: 7812
// Function ID: 62312
// Name: hasFetchedColors
// Dependencies: [57, 5, 31, 4122, 621, 682, 1447, 3974, 566, 6784, 2]
// Exports: default, maybeFetchColors, useHasFetchedColors

// Module 7812 (hasFetchedColors)
import _slicedToArray from "_slicedToArray";
import batchUpdates from "batchUpdates";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import keys from "keys";

const require = arg1;
function hasFetchedColors(image_url) {
  return null != keys.getState().palette[image_url];
}
async function _maybeFetchColors(arg0, arg1) {
  if (!outer2_8(arg0)) {
    return yield outer2_10(arg0);
  }
}
function fetchColors() {
  return _fetchColors(...arguments);
}
async function _fetchColors(arg0, arg1) {
  let closure_0 = arg0;
  let c1;
  let complimentaryPaletteForColor;
  if (!outer2_7.getState().fetching[arg0]) {
    outer2_0(outer2_2[5]).batchUpdates(() => outer3_7.setState((fetching) => {
      let obj = {};
      obj = {};
      const merged = Object.assign(fetching.fetching);
      obj[outer1_0] = true;
      obj.fetching = obj;
      return obj;
    }));
    let obj = outer2_0(outer2_2[5]);
    const tmp6 = yield outer2_0(outer2_2[6]).getPaletteForAvatar(arg0);
    c1 = tmp6;
    const obj2 = outer2_0(outer2_2[6]);
    complimentaryPaletteForColor = outer2_0(outer2_2[7]).getComplimentaryPaletteForColor(tmp6[0]);
    const obj3 = outer2_0(outer2_2[7]);
    outer2_0(outer2_2[5]).batchUpdates(() => {
      outer3_7.setState((fetching) => {
        let obj = {};
        obj = {};
        const merged = Object.assign(fetching.fetching);
        obj[outer1_0] = false;
        obj.fetching = obj;
        obj = {};
        const merged1 = Object.assign(fetching.palette);
        const items = [...outer1_2];
        obj[outer1_0] = items;
        obj.palette = obj;
        return obj;
      });
    });
    const obj4 = outer2_0(outer2_2[5]);
  }
}
function useAvatarColors(pendingAvatarSrc, PRIMARY_530, flag) {
  const _require = pendingAvatarSrc;
  if (flag === undefined) {
    flag = true;
  }
  let dependencyMap;
  let stateFromStores;
  let tmp = keys((arg0) => {
    let tmp;
    if (null != closure_0) {
      tmp = arg0.palette[closure_0];
    }
    return tmp;
  });
  dependencyMap = tmp;
  const items = [_isNativeReflectConstruct];
  stateFromStores = _require(566).useStateFromStores(items, () => {
    let num = 1;
    if (flag) {
      num = 1;
      if (outer1_6.desaturateUserColors) {
        num = outer1_6.saturation;
      }
    }
    return num;
  });
  const items1 = [pendingAvatarSrc, tmp];
  const effect = React.useEffect(() => {
    let tmp = null != closure_0;
    if (tmp) {
      tmp = null == c2;
    }
    if (tmp) {
      outer1_10(closure_0);
    }
  }, items1);
  const items2 = [tmp, stateFromStores];
  let memo = React.useMemo(() => {
    let mapped;
    if (null != _undefined) {
      mapped = _undefined.map((arg0) => {
        let h;
        let l;
        let s;
        let tmp;
        let tmp2;
        let tmp3;
        [tmp, tmp2, tmp3] = arg0;
        let obj = flag(6784)({ r: tmp, g: tmp2, b: tmp3 });
        ({ h, s, l } = obj.toHsl());
        obj = { h, s: s * outer1_3, l };
        const toHslResult = obj.toHsl();
        return flag(6784)(obj).toHexString();
      });
    }
    return mapped;
  }, items2);
  if (null == memo) {
    const items3 = [PRIMARY_530, PRIMARY_530];
    memo = items3;
  }
  return memo;
}
keys = keys.create(() => ({ palette: {}, fetching: {} }));
const result = require("result").fileFinishedImporting("modules/avatar/useAvatarColor.tsx");

export default function useAvatarColor(pendingAvatarSrc, PRIMARY_530, flag) {
  if (flag === undefined) {
    flag = true;
  }
  return callback(useAvatarColors(pendingAvatarSrc, PRIMARY_530, flag), 1)[0];
};
export const useColorStore = keys;
export { hasFetchedColors };
export const maybeFetchColors = function maybeFetchColors(closure_0) {
  return _maybeFetchColors(...arguments);
};
export const useHasFetchedColors = function useHasFetchedColors(arg0) {
  let closure_0 = arg0;
  return !keys((arg0) => {
    let tmp = null != closure_0;
    if (tmp) {
      tmp = arg0.fetching[closure_0];
    }
    return tmp;
  });
};
export { useAvatarColors };
