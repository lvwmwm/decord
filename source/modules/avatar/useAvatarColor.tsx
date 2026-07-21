// Module ID: 7805
// Function ID: 62252
// Name: hasFetchedColors
// Dependencies: []
// Exports: default, maybeFetchColors, useHasFetchedColors

// Module 7805 (hasFetchedColors)
function hasFetchedColors(image_url) {
  return null != obj.getState().palette[image_url];
}
async function _maybeFetchColors(arg0, arg1) {
  if (!callback(arg0)) {
    return yield closure_10(arg0);
  }
}
function fetchColors() {
  return _fetchColors(...arguments);
}
async function _fetchColors(emojiURL, arg1) {
  let tmp6;
  let complimentaryPaletteForColor;
  if (!state.getState().fetching[emojiURL]) {
    emojiURL(complimentaryPaletteForColor[5]).batchUpdates(() => store.setState((fetching) => {
      let obj = {};
      obj = {};
      const merged = Object.assign(fetching.fetching);
      obj[closure_0] = true;
      obj.fetching = obj;
      return obj;
    }));
    const obj = emojiURL(complimentaryPaletteForColor[5]);
    tmp6 = yield emojiURL(complimentaryPaletteForColor[6]).getPaletteForAvatar(emojiURL);
    const obj2 = emojiURL(complimentaryPaletteForColor[6]);
    complimentaryPaletteForColor = emojiURL(complimentaryPaletteForColor[7]).getComplimentaryPaletteForColor(tmp6[0]);
    const obj3 = emojiURL(complimentaryPaletteForColor[7]);
    emojiURL(complimentaryPaletteForColor[5]).batchUpdates(() => {
      store.setState((fetching) => {
        let obj = {};
        obj = {};
        const merged = Object.assign(fetching.fetching);
        obj[closure_0] = false;
        obj.fetching = obj;
        obj = {};
        const merged1 = Object.assign(fetching.palette);
        const items = [...closure_2];
        obj[closure_0] = items;
        obj.palette = obj;
        return obj;
      });
    });
    const obj4 = emojiURL(complimentaryPaletteForColor[5]);
  }
}
function useAvatarColors(pendingAvatarSrc, PRIMARY_530, flag) {
  PRIMARY_530 = pendingAvatarSrc;
  if (flag === undefined) {
    flag = true;
  }
  const importDefault = flag;
  let dependencyMap;
  let closure_3;
  const tmp = obj((arg0) => {
    let tmp;
    if (null != arg0) {
      tmp = arg0.palette[closure_0];
    }
    return tmp;
  });
  dependencyMap = tmp;
  const obj = PRIMARY_530(dependencyMap[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let num = 1;
    if (flag) {
      num = 1;
      if (closure_6.desaturateUserColors) {
        num = closure_6.saturation;
      }
    }
    return num;
  });
  closure_3 = stateFromStores;
  const items1 = [pendingAvatarSrc, tmp];
  const effect = React.useEffect(() => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = null == tmp;
    }
    if (tmp) {
      callback(arg0);
    }
  }, items1);
  const items2 = [tmp, stateFromStores];
  let memo = React.useMemo(() => {
    let mapped;
    if (null != tmp) {
      mapped = tmp.map((arg0) => {
        let h;
        let l;
        let s;
        let tmp;
        let tmp2;
        let tmp3;
        [tmp, tmp2, tmp3] = arg0;
        let obj = callback(closure_2[9])({ r: tmp, g: tmp2, b: tmp3 });
        ({ h, s, l } = obj.toHsl());
        obj = { h, s: s * closure_3, l };
        const toHslResult = obj.toHsl();
        return callback(closure_2[9])(obj).toHexString();
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let obj = arg1(dependencyMap[4]);
obj = obj.create(() => ({ palette: {}, fetching: {} }));
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/avatar/useAvatarColor.tsx");

export default function useAvatarColor(pendingAvatarSrc, PRIMARY_530, flag) {
  if (flag === undefined) {
    flag = true;
  }
  return callback(useAvatarColors(pendingAvatarSrc, PRIMARY_530, flag), 1)[0];
};
export const useColorStore = obj;
export { hasFetchedColors };
export const maybeFetchColors = function maybeFetchColors(guildIconURL) {
  return _maybeFetchColors(...arguments);
};
export const useHasFetchedColors = function useHasFetchedColors(arg0) {
  const arg1 = arg0;
  return !obj((arg0) => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = arg0.fetching[closure_0];
    }
    return tmp;
  });
};
export { useAvatarColors };
