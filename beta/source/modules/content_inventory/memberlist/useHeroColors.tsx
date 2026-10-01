// Module ID: 7590
// Function ID: 7591
// Name: useHeroColors
// Dependencies: [32, 19, 4825, 1182, 7589, 6972, 7591, 1092, 672, 504, 2]
// Exports: default, getHeroColors

// Module 7590 (useHeroColors)
import _modDef672 from "module_672" /* 672 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import _modDef6972 from "module_6972" /* 6972 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import size from "module_2" /* 2 */;

let c7 = 0.725;
const result = size.fileFinishedImporting("modules/content_inventory/memberlist/useHeroColors.tsx");

export default function useHeroColors(pendingAvatarSrc) {
  let first;
  let saturation;
  let theme;
  let tmp6;
  let obj = first(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => saturation.saturation);
  let obj2 = first(504);
  const items1 = [ThemeStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => theme.theme);
  let obj3 = first(7591);
  const fallbackHeroColor = obj3.getFallbackHeroColor(stateFromStores1, stateFromStores);
  let obj4 = first(7589);
  [first, tmp6] = obj4.useAvatarColors(pendingAvatarSrc, fallbackHeroColor);
  let closure_1 = tmp6;
  const items2 = [first, tmp6];
  return react.useMemo(() => {
    let obj12;
    let obj13;
    const obj = utils_ColorUtils;
    const hex2intResult = obj.hex2int(first);
    const obj2 = utils_ColorUtils;
    const hex2intResult1 = obj2.hex2int(closure_1);
    let num = 1;
    let tmp4 = hex2intResult;
    let tmp5 = hex2intResult;
    const obj3 = utils_ColorUtils;
    if (obj3.getDarkness(hex2intResult) < c7) {
      const obj4 = _modDef672(tmp4);
      const darkenResult = obj4.darken(0.5);
      const numResult = darkenResult.num();
      const sum = num + 1;
      tmp5 = numResult;
      while (sum < 8) {
        let obj6 = utils_ColorUtils;
        num = sum;
        tmp4 = numResult;
        tmp5 = numResult;
        if (obj6.getDarkness(numResult) >= c7) {
          break;
        }
      }
    }
    let num2 = 1;
    let tmp12 = hex2intResult1;
    let tmp13 = hex2intResult1;
    const obj7 = utils_ColorUtils;
    if (obj7.getDarkness(hex2intResult1) < c7) {
      const obj8 = _modDef672(tmp12);
      const darkenResult1 = obj8.darken(0.5);
      const numResult1 = darkenResult1.num();
      const sum1 = num2 + 1;
      tmp13 = numResult1;
      while (sum1 < 8) {
        let obj10 = utils_ColorUtils;
        num2 = sum1;
        tmp12 = numResult1;
        tmp13 = numResult1;
        if (obj10.getDarkness(numResult1) >= c7) {
          break;
        }
      }
    }
    const obj5 = { primaryColor: obj12.int2hex(tmp5), secondaryColor: obj13.int2hex(tmp13) };
    obj12 = utils_ColorUtils;
    obj13 = utils_ColorUtils;
    return obj5;
  }, items2);
};
export const getHeroColors = function getHeroColors(iconURL) {
  let num;
  let obj13;
  let obj14;
  let tmp7;
  let tmp8;
  const tmp2 = num;
  let tmp3 = dependencyMap;
  const tmp = AccessibilityStore;
  const saturation = AccessibilityStore.saturation;
  const theme = ThemeStore.theme;
  let obj = num(7591);
  const fallbackHeroColor = obj.getFallbackHeroColor(theme, saturation);
  num = 1;
  if (AccessibilityStore.desaturateUserColors) {
    num = tmp.saturation;
  }
  const useColorStore = tmp2(7589).useColorStore;
  const arr = useColorStore.getState().palette[iconURL];
  let mapped;
  if (arr != null) {
    mapped = arr.map((item) => {
      let h;
      let l;
      let s;
      let tmp;
      let tmp2;
      let tmp3;
      [tmp, tmp2, tmp3] = item;
      const obj = _modDef6972({ r: tmp, g: tmp2, b: tmp3 });
      ({ h, s, l } = obj.toHsl());
      const obj2 = { h, s: s * num, l };
      obj.toHsl();
      const obj3 = _modDef6972(obj2);
      return obj3.toHexString();
    });
  }
  if (mapped == null) {
    const items = [fallbackHeroColor, fallbackHeroColor];
    mapped = items;
  }
  [tmp7, tmp8] = mapped;
  _slicedToArray(mapped, 2);
  const tmp2Result = tmp2(1092);
  const hex2intResult = tmp2Result.hex2int(tmp7);
  const tmp2Result3 = tmp2(1092);
  const hex2intResult1 = tmp2Result3.hex2int(tmp8);
  let num2 = 1;
  let tmp11 = hex2intResult;
  let tmp12 = hex2intResult;
  const tmp2Result4 = tmp2(1092);
  if (tmp2Result4.getDarkness(hex2intResult) < c7) {
    const obj5 = _modDef672(tmp11);
    const darkenResult = obj5.darken(0.5);
    const numResult = darkenResult.num();
    const sum = num2 + 1;
    tmp12 = numResult;
    tmp3 = dependencyMap;
    const tmp14 = dependencyMap;
    while (sum < 8) {
      let obj7 = num(1092);
      num2 = sum;
      tmp11 = numResult;
      tmp12 = numResult;
      tmp3 = tmp14;
      if (obj7.getDarkness(numResult) >= c7) {
        break;
      }
    }
  }
  let num3 = 1;
  let tmp19 = hex2intResult1;
  let tmp20 = hex2intResult1;
  const obj8 = num(1092);
  if (obj8.getDarkness(hex2intResult1) < c7) {
    const obj9 = _modDef672(tmp19);
    const darkenResult1 = obj9.darken(0.5);
    const numResult1 = darkenResult1.num();
    const sum1 = num3 + 1;
    tmp20 = numResult1;
    tmp3 = dependencyMap;
    const tmp22 = dependencyMap;
    while (sum1 < 8) {
      let obj11 = num(1092);
      num3 = sum1;
      tmp19 = numResult1;
      tmp20 = numResult1;
      tmp3 = tmp22;
      if (obj11.getDarkness(numResult1) >= c7) {
        break;
      }
    }
  }
  let obj2 = { primaryColor: obj13.int2hex(tmp12), secondaryColor: obj14.int2hex(tmp20) };
  obj13 = num(1092);
  obj14 = num(1092);
  return obj2;
};
