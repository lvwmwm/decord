// Module ID: 7802
// Function ID: 62266
// Name: useHeroColors
// Dependencies: []
// Exports: default, getHeroColors

// Module 7802 (useHeroColors)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/content_inventory/memberlist/useHeroColors.tsx");

export default function useHeroColors(pendingAvatarSrc) {
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[9]).useStateFromStores(items, () => saturation.saturation);
  const obj = arg1(dependencyMap[9]);
  const items1 = [closure_6];
  const stateFromStores1 = arg1(dependencyMap[9]).useStateFromStores(items1, () => theme.theme);
  const obj2 = arg1(dependencyMap[9]);
  const fallbackHeroColor = arg1(dependencyMap[6]).getFallbackHeroColor(stateFromStores1, stateFromStores);
  const obj3 = arg1(dependencyMap[6]);
  const tmp4 = callback(arg1(dependencyMap[4]).useAvatarColors(pendingAvatarSrc, fallbackHeroColor), 2);
  const first = tmp4[0];
  const arg1 = first;
  const importDefault = tmp6;
  const items2 = [first, tmp4[1]];
  return React.useMemo(() => {
    let obj = first(closure_2[7]);
    const hex2intResult = obj.hex2int(first);
    const hex2intResult1 = first(closure_2[7]).hex2int(tmp6);
    const obj2 = first(closure_2[7]);
    let num = 1;
    let tmp3 = hex2intResult;
    let num2 = 1;
    let tmp4 = hex2intResult;
    if (obj3.getDarkness(hex2intResult) < 0.725) {
      const obj4 = closure_2(closure_2[8])(tmp3);
      const numResult = closure_2(closure_2[8])(tmp3).darken(0.5).num();
      num2 = num2 + 1;
      tmp4 = numResult;
      while (num2 < 8) {
        let tmp8 = first;
        let tmp9 = closure_2;
        let obj6 = first(closure_2[7]);
        tmp3 = numResult;
        tmp4 = numResult;
        if (obj6.getDarkness(numResult) >= 0.725) {
          break;
        }
      }
      const darkenResult = closure_2(closure_2[8])(tmp3).darken(0.5);
    }
    const obj3 = first(closure_2[7]);
    let tmp10 = hex2intResult1;
    let tmp11 = hex2intResult1;
    if (obj7.getDarkness(hex2intResult1) < 0.725) {
      const obj8 = tmp6(closure_2[8])(tmp10);
      const numResult1 = tmp6(closure_2[8])(tmp10).darken(0.5).num();
      num = num + 1;
      tmp11 = numResult1;
      while (num < 8) {
        let tmp15 = first;
        let tmp16 = closure_2;
        let obj10 = first(closure_2[7]);
        tmp10 = numResult1;
        tmp11 = numResult1;
        if (obj10.getDarkness(numResult1) >= 0.725) {
          break;
        }
      }
      const darkenResult1 = tmp6(closure_2[8])(tmp10).darken(0.5);
    }
    obj = {};
    const obj7 = first(closure_2[7]);
    obj.primaryColor = first(closure_2[7]).int2hex(tmp4);
    const obj12 = first(closure_2[7]);
    obj.secondaryColor = first(closure_2[7]).int2hex(tmp11);
    return obj;
  }, items2);
};
export const getHeroColors = function getHeroColors(image_url) {
  let tmp2;
  let tmp3;
  let obj = arg1(dependencyMap[6]);
  let num = 1;
  [tmp2, tmp3] = callback(function getPalette(image_url, fallbackHeroColor) {
    let num = 1;
    if (closure_5.desaturateUserColors) {
      num = closure_5.saturation;
    }
    let mapped;
    const useColorStore = num(closure_2[4]).useColorStore;
    const arr = useColorStore.getState().palette[image_url];
    if (null != arr) {
      mapped = arr.map((arg0) => {
        let h;
        let l;
        let s;
        let tmp;
        let tmp2;
        let tmp3;
        [tmp, tmp2, tmp3] = arg0;
        let obj = callback(closure_2[5])({ r: tmp, g: tmp2, b: tmp3 });
        ({ h, s, l } = obj.toHsl());
        obj = { h, s: s * num, l };
        const toHslResult = obj.toHsl();
        return callback(closure_2[5])(obj).toHexString();
      });
    }
    if (null == mapped) {
      const items = [fallbackHeroColor, fallbackHeroColor];
      mapped = items;
    }
    return mapped;
  }(image_url, obj.getFallbackHeroColor(theme.theme, saturation.saturation)), 2);
  const tmp = callback(function getPalette(image_url, fallbackHeroColor) {
    let num = 1;
    if (closure_5.desaturateUserColors) {
      num = closure_5.saturation;
    }
    let mapped;
    const useColorStore = num(closure_2[4]).useColorStore;
    const arr = useColorStore.getState().palette[image_url];
    if (null != arr) {
      mapped = arr.map((arg0) => {
        let h;
        let l;
        let s;
        let tmp;
        let tmp2;
        let tmp3;
        [tmp, tmp2, tmp3] = arg0;
        let obj = callback(closure_2[5])({ r: tmp, g: tmp2, b: tmp3 });
        ({ h, s, l } = obj.toHsl());
        obj = { h, s: s * num, l };
        const toHslResult = obj.toHsl();
        return callback(closure_2[5])(obj).toHexString();
      });
    }
    if (null == mapped) {
      const items = [fallbackHeroColor, fallbackHeroColor];
      mapped = items;
    }
    return mapped;
  }(image_url, obj.getFallbackHeroColor(theme.theme, saturation.saturation)), 2);
  const hex2intResult = arg1(dependencyMap[7]).hex2int(tmp2);
  const obj2 = arg1(dependencyMap[7]);
  const hex2intResult1 = arg1(dependencyMap[7]).hex2int(tmp3);
  const obj3 = arg1(dependencyMap[7]);
  let tmp6 = hex2intResult;
  let num2 = 1;
  let tmp7 = hex2intResult;
  if (obj4.getDarkness(hex2intResult) < 0.725) {
    const obj5 = importDefault(dependencyMap[8])(tmp6);
    const numResult = importDefault(dependencyMap[8])(tmp6).darken(0.5).num();
    num2 = num2 + 1;
    tmp7 = numResult;
    while (num2 < 8) {
      let tmp11 = arg1;
      let tmp12 = dependencyMap;
      let obj7 = arg1(dependencyMap[7]);
      tmp6 = numResult;
      tmp7 = numResult;
      if (obj7.getDarkness(numResult) >= 0.725) {
        break;
      }
    }
    const darkenResult = importDefault(dependencyMap[8])(tmp6).darken(0.5);
  }
  const obj4 = arg1(dependencyMap[7]);
  let tmp13 = hex2intResult1;
  let tmp14 = hex2intResult1;
  if (obj8.getDarkness(hex2intResult1) < 0.725) {
    const obj9 = importDefault(dependencyMap[8])(tmp13);
    const numResult1 = importDefault(dependencyMap[8])(tmp13).darken(0.5).num();
    num = num + 1;
    tmp14 = numResult1;
    while (num < 8) {
      let tmp18 = arg1;
      let tmp19 = dependencyMap;
      let obj11 = arg1(dependencyMap[7]);
      tmp13 = numResult1;
      tmp14 = numResult1;
      if (obj11.getDarkness(numResult1) >= 0.725) {
        break;
      }
    }
    const darkenResult1 = importDefault(dependencyMap[8])(tmp13).darken(0.5);
  }
  obj = {};
  const obj8 = arg1(dependencyMap[7]);
  obj.primaryColor = arg1(dependencyMap[7]).int2hex(tmp7);
  const obj13 = arg1(dependencyMap[7]);
  obj.secondaryColor = arg1(dependencyMap[7]).int2hex(tmp14);
  return obj;
};
