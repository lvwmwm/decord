// Module ID: 7904
// Function ID: 62659
// Name: useHeroColors
// Dependencies: [57, 31, 4122, 1278, 7903, 6784, 7905, 665, 666, 566, 2]
// Exports: default, getHeroColors

// Module 7904 (useHeroColors)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/content_inventory/memberlist/useHeroColors.tsx");

export default function useHeroColors(pendingAvatarSrc) {
  const items = [_isNativeReflectConstruct];
  const stateFromStores = first(566).useStateFromStores(items, () => outer1_5.saturation);
  let obj = first(566);
  const items1 = [closure_6];
  const stateFromStores1 = first(566).useStateFromStores(items1, () => outer1_6.theme);
  let obj2 = first(566);
  const fallbackHeroColor = first(7905).getFallbackHeroColor(stateFromStores1, stateFromStores);
  let obj3 = first(7905);
  let tmp4 = callback(first(7903).useAvatarColors(pendingAvatarSrc, fallbackHeroColor), 2);
  first = tmp4[0];
  const importDefault = tmp6;
  const items2 = [first, tmp4[1]];
  return React.useMemo(() => {
    let obj = first(outer1_2[7]);
    const hex2intResult = obj.hex2int(first);
    const hex2intResult1 = first(outer1_2[7]).hex2int(tmp6);
    const obj2 = first(outer1_2[7]);
    let num = 1;
    let tmp3 = hex2intResult;
    let num2 = 1;
    let tmp4 = hex2intResult;
    if (obj3.getDarkness(hex2intResult) < 0.725) {
      const obj4 = outer1_2(outer1_2[8])(tmp3);
      const numResult = outer1_2(outer1_2[8])(tmp3).darken(0.5).num();
      num2 = num2 + 1;
      tmp4 = numResult;
      while (num2 < 8) {
        let tmp8 = first;
        let tmp9 = outer1_2;
        let obj6 = first(outer1_2[7]);
        tmp3 = numResult;
        tmp4 = numResult;
        if (obj6.getDarkness(numResult) >= 0.725) {
          break;
        }
      }
      const darkenResult = outer1_2(outer1_2[8])(tmp3).darken(0.5);
    }
    obj3 = first(outer1_2[7]);
    let tmp10 = hex2intResult1;
    let tmp11 = hex2intResult1;
    if (obj7.getDarkness(hex2intResult1) < 0.725) {
      const obj8 = tmp6(outer1_2[8])(tmp10);
      const numResult1 = tmp6(outer1_2[8])(tmp10).darken(0.5).num();
      num = num + 1;
      tmp11 = numResult1;
      while (num < 8) {
        let tmp15 = first;
        let tmp16 = outer1_2;
        let obj10 = first(outer1_2[7]);
        tmp10 = numResult1;
        tmp11 = numResult1;
        if (obj10.getDarkness(numResult1) >= 0.725) {
          break;
        }
      }
      const darkenResult1 = tmp6(outer1_2[8])(tmp10).darken(0.5);
    }
    obj = {};
    obj7 = first(outer1_2[7]);
    obj.primaryColor = first(outer1_2[7]).int2hex(tmp4);
    const obj12 = first(outer1_2[7]);
    obj.secondaryColor = first(outer1_2[7]).int2hex(tmp11);
    return obj;
  }, items2);
};
export const getHeroColors = function getHeroColors(image_url) {
  let tmp2;
  let tmp3;
  let obj = require(7905) /* getFallbackHeroColor */;
  let num = 1;
  [tmp2, tmp3] = callback((function getPalette(image_url, fallbackHeroColor) {
    let num = 1;
    if (outer1_5.desaturateUserColors) {
      num = outer1_5.saturation;
    }
    let mapped;
    const useColorStore = outer1_0(outer1_2[4]).useColorStore;
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
        let obj = outer2_1(outer2_2[5])({ r: tmp, g: tmp2, b: tmp3 });
        ({ h, s, l } = obj.toHsl());
        obj = { h, s: s * num, l };
        const toHslResult = obj.toHsl();
        return outer2_1(outer2_2[5])(obj).toHexString();
      });
    }
    if (null == mapped) {
      const items = [fallbackHeroColor, fallbackHeroColor];
      mapped = items;
    }
    return mapped;
  })(image_url, obj.getFallbackHeroColor(theme.theme, saturation.saturation)), 2);
  const tmp = callback((function getPalette(image_url, fallbackHeroColor) {
    let num = 1;
    if (outer1_5.desaturateUserColors) {
      num = outer1_5.saturation;
    }
    let mapped;
    const useColorStore = outer1_0(outer1_2[4]).useColorStore;
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
        let obj = outer2_1(outer2_2[5])({ r: tmp, g: tmp2, b: tmp3 });
        ({ h, s, l } = obj.toHsl());
        obj = { h, s: s * num, l };
        const toHslResult = obj.toHsl();
        return outer2_1(outer2_2[5])(obj).toHexString();
      });
    }
    if (null == mapped) {
      const items = [fallbackHeroColor, fallbackHeroColor];
      mapped = items;
    }
    return mapped;
  })(image_url, obj.getFallbackHeroColor(theme.theme, saturation.saturation)), 2);
  const hex2intResult = require(665) /* pad2 */.hex2int(tmp2);
  const obj2 = require(665) /* pad2 */;
  const hex2intResult1 = require(665) /* pad2 */.hex2int(tmp3);
  const obj3 = require(665) /* pad2 */;
  let tmp6 = hex2intResult;
  let num2 = 1;
  let tmp7 = hex2intResult;
  if (obj4.getDarkness(hex2intResult) < 0.725) {
    const obj5 = importDefault(666)(tmp6);
    const numResult = importDefault(666)(tmp6).darken(0.5).num();
    num2 = num2 + 1;
    tmp7 = numResult;
    while (num2 < 8) {
      let tmp11 = require;
      let tmp12 = dependencyMap;
      let obj7 = require(665) /* pad2 */;
      tmp6 = numResult;
      tmp7 = numResult;
      if (obj7.getDarkness(numResult) >= 0.725) {
        break;
      }
    }
    const darkenResult = importDefault(666)(tmp6).darken(0.5);
  }
  obj4 = require(665) /* pad2 */;
  let tmp13 = hex2intResult1;
  let tmp14 = hex2intResult1;
  if (obj8.getDarkness(hex2intResult1) < 0.725) {
    const obj9 = importDefault(666)(tmp13);
    const numResult1 = importDefault(666)(tmp13).darken(0.5).num();
    num = num + 1;
    tmp14 = numResult1;
    while (num < 8) {
      let tmp18 = require;
      let tmp19 = dependencyMap;
      let obj11 = require(665) /* pad2 */;
      tmp13 = numResult1;
      tmp14 = numResult1;
      if (obj11.getDarkness(numResult1) >= 0.725) {
        break;
      }
    }
    const darkenResult1 = importDefault(666)(tmp13).darken(0.5);
  }
  obj = {};
  obj8 = require(665) /* pad2 */;
  obj.primaryColor = require(665) /* pad2 */.int2hex(tmp7);
  const obj13 = require(665) /* pad2 */;
  obj.secondaryColor = require(665) /* pad2 */.int2hex(tmp14);
  return obj;
};
