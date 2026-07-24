// Module ID: 3939
// Function ID: 32459
// Name: toRGBAString
// Dependencies: [57, 666, 2]
// Exports: brightenColor, darkenColor, getContrastingColor, setColorOpacity

// Module 3939 (toRGBAString)
import _slicedToArray from "_slicedToArray";

function toRGBAString(rgba) {
  const tmp = callback(rgba.rgba(), 4);
  return "rgba(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ", " + tmp[3] + ")";
}
let obj = { NonText: 3, Text: 4.5, HighContrastText: 7 };
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Colors/shared/Colors.tsx");

export const WCAGContrastRatios = obj;
export const getContrastingColor = function getContrastingColor(primaryColor, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let NonText = obj.contrastRatio;
  if (null == NonText) {
    NonText = obj.NonText;
  }
  const tolerance = obj.tolerance;
  let num = 3;
  if (null != tolerance) {
    num = tolerance;
  }
  const base = obj.base;
  let tmp3 = primaryColor;
  if (null != base) {
    tmp3 = base;
  }
  const tmp2Result = importDefault(666)(tmp3);
  const tmp4 = importDefault(666)(primaryColor);
  const tmp2 = importDefault(666);
  const luminanceResult = tmp2Result.luminance();
  let contrastResult = importDefault(666).contrast(tmp2Result, tmp4);
  let num2 = 99;
  let obj4 = tmp4;
  while (true) {
    let tmp7 = contrastResult < NonText;
    let tmp8 = contrastResult > NonText + num;
    if (tmp7) {
      let tmp10 = obj4.luminance() > luminanceResult;
      if (!tmp8) {
        if (!tmp7) {
          let brightenResult = obj4.brighten();
          let tmp12 = importDefault;
          let tmp13 = dependencyMap;
          let obj5 = importDefault(666);
          contrastResult = obj5.contrast(tmp2Result, brightenResult);
          let tmp14 = +num2;
          num2 = tmp14 - 1;
          obj4 = brightenResult;
          let tmp9 = brightenResult;
          if (tmp14 <= 0) {
            break;
          }
        }
      }
      brightenResult = obj4.darken();
    } else {
      tmp9 = obj4;
      if (!tmp8) {
        break;
      }
    }
    let tmp15 = toRGBAString;
    return toRGBAString(tmp9);
  }
};
export const darkenColor = function darkenColor(contrastingColor, arg1) {
  return toRGBAString(importDefault(666)(contrastingColor).darken(arg1));
};
export const brightenColor = function brightenColor(token, arg1) {
  return toRGBAString(importDefault(666)(token).brighten(arg1));
};
export const setColorOpacity = function setColorOpacity(white, self) {
  return toRGBAString(importDefault(666)(white).alpha(self));
};
