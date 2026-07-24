// Module ID: 9807
// Function ID: 76210
// Name: getMidpointColor
// Dependencies: [57, 4122, 7980, 6784, 624, 2]
// Exports: default

// Module 9807 (getMidpointColor)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function getMidpointColor(toRgb, toRgb2) {
  let tmp4;
  let tmp5;
  let tmp6;
  const toRgbResult = toRgb.toRgb();
  const toRgbResult1 = toRgb2.toRgb();
  const items = [, , ];
  ({ r: arr[0], g: arr[1], b: arr[2] } = toRgbResult);
  const items1 = [, , ];
  ({ r: arr2[0], g: arr2[1], b: arr2[2] } = toRgbResult1);
  const obj = require(7980) /* getProfileTheme */;
  [tmp4, tmp5, tmp6] = callback(require(7980) /* getProfileTheme */.getValueInColorGradientByPercentage(items, items1, 50), 3);
  return importDefault(6784)({ r, g, b });
}
function getBackgroundColors(dark) {
  if (0 !== arg1.length) {
    if (1 === arg1.length) {
      let obj = { primary: arg1[0], secondary: arg1[0] };
      const first = arg1[0];
      obj.border = first.setAlpha(0.4);
      const first1 = arg1[0];
      obj.label = first1.isLight() ? dark.dark : dark.light;
    } else {
      obj = {};
      [obj6.primary, obj6.secondary] = arg1;
      let tmp;
      if (arg1.length > 2) {
        tmp = arg1[2];
      }
      obj.tertiary = tmp;
      obj = getMidpointColor(arg1[0], arg1[1]);
      obj.border = obj.setAlpha(0.4);
      obj.label = getMidpointColor(arg1[0], arg1[1]).isLight() ? dark.dark : dark.light;
      return obj;
    }
  }
}
function getButtonColors(dark) {
  if (0 !== arg1.length) {
    if (1 === arg1.length) {
      let obj = { primary: arg1[0], secondary: arg1[0] };
      const first = arg1[0];
      obj.text = first.isLight() ? dark.dark : dark.light;
    } else {
      obj = {};
      [obj.primary, obj.secondary] = arg1;
      obj.text = getMidpointColor(arg1[0], arg1[1]).isLight() ? dark.dark : dark.light;
      return obj;
    }
  }
}
function desaturate(toHsl) {
  let h;
  let l;
  let s;
  ({ h, s, l } = toHsl.toHsl());
  return importDefault(6784)({ h, s: s * arg1, l });
}
const result = require("getProfileTheme").fileFinishedImporting("modules/collectibles/createUseCollectiblesShopStyles.tsx");

export default function createUseCollectiblesShopStyles(arg0) {
  let closure_0 = arg0;
  return (backgroundColors) => {
    let obj = callback(outer1_2[4]);
    const items = [outer1_4];
    const stateFromStores = obj.useStateFromStores(items, () => outer2_4.saturation);
    if (null == backgroundColors) {
      return {};
    } else {
      obj = { backgroundColors: outer1_6(stateFromStores, backgroundColors.backgroundColors), buttonColors: outer1_7(stateFromStores, backgroundColors.buttonColors), confettiColors: backgroundColors.confettiColors };
      if (1 === stateFromStores) {
        obj = {};
        const merged = Object.assign(obj);
        let obj1 = obj;
      } else {
        obj1 = {};
        let tmp6;
        if (null != obj.backgroundColors) {
          const obj2 = { primary: outer1_8(obj.backgroundColors.primary, stateFromStores), secondary: outer1_8(obj.backgroundColors.secondary, stateFromStores) };
          let tmp3;
          if (null != obj.backgroundColors.tertiary) {
            tmp3 = outer1_8(obj.backgroundColors.tertiary, stateFromStores);
          }
          obj2.tertiary = tmp3;
          obj2.border = outer1_8(obj.backgroundColors.border, stateFromStores);
          obj2.label = outer1_8(obj.backgroundColors.label, stateFromStores);
          tmp6 = obj2;
        }
        obj1.backgroundColors = tmp6;
        let tmp7;
        if (null != obj.buttonColors) {
          const obj3 = { primary: outer1_8(obj.buttonColors.primary, stateFromStores), secondary: outer1_8(obj.buttonColors.secondary, stateFromStores), text: outer1_8(obj.buttonColors.text, stateFromStores) };
          tmp7 = obj3;
        }
        obj1.buttonColors = tmp7;
        const confettiColors = obj.confettiColors;
        obj1.confettiColors = confettiColors.map((arg0) => outer2_8(arg0, stateFromStores));
      }
      return obj1;
    }
  };
};
