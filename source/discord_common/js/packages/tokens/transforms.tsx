// Module ID: 785
// Function ID: 8895
// Name: interpolate
// Dependencies: []
// Exports: transformColorContrast, transformColorForIncreasedContrast, transformColorForReducedContrast, transformColorForReducedSaturation

// Module 785 (interpolate)
function interpolate(arg0, arg1, arg2) {
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let diff = arg2;
  [tmp2, tmp3] = arg0;
  [tmp4, tmp5] = arg1;
  let result = (result1 + tmp3) / 2;
  if (diff === result) {
    return result;
  } else if (diff < result) {
    diff = diff - result1;
    const result1 = diff / (result - result1);
    result = result1 * (result - tmp4);
    let sum = tmp4 + result;
  } else {
    sum = result + (diff - result) / (tmp3 - result) * (tmp5 - result);
  }
}
let closure_2 = { BACKGROUND_LIGHTNESS_LIGHT_THEME: "*0.975", BACKGROUND_LIGHTNESS_DARK_THEME: "*1.6", BACKGROUND_SATURATION: "*0.8", TEXT_LIGHTNESS_LIGHT_THEME: "*1.05", TEXT_LIGHTNESS_MULTIPLIER_DARK_THEME: 0.85, [0.85]: "TEXT_LIGHTNESS_MULTIPLIER_DARK_THEME", TEXT_LIGHTNESS_MAX_DARK_THEME: 0.6, [0.6]: "TEXT_LIGHTNESS_MAX_DARK_THEME" };
let closure_3 = { BORDER_MIN_OPACITY: 0.3, [0.3]: "BORDER_MIN_OPACITY", TEXT_LIGHTNESS_LIGHT_THEME: "*0.6", TEXT_LIGHTNESS_DARK_THEME: "*1.5", TEXT_SATURATION: "*2", BACKGROUND_LIGHTNESS_DARK_THEME: "*0.9" };
let closure_4 = ["@", "getOwnPropertyDescriptors"];
let closure_5 = [24199124, 838860800];
let closure_6 = [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002022174814550316, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000139067116189079];
let closure_7 = [];
let closure_8 = ["<string:1374659169>", "<string:3865160801>"];
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/tokens/transforms.tsx");

export const transformColorForReducedContrast = function transformColorForReducedContrast(arg0, arg1, arg2) {
  if ("background" !== arg1) {
    if ("border" !== arg1) {
      if ("text" === arg1) {
        if ("light" === arg2) {
          let TEXT_LIGHTNESS_LIGHT_THEME = constants.TEXT_LIGHTNESS_LIGHT_THEME;
        } else {
          const _Math = Math;
          TEXT_LIGHTNESS_LIGHT_THEME = Math.max(tmp3 * constants.TEXT_LIGHTNESS_MULTIPLIER_DARK_THEME, constants.TEXT_LIGHTNESS_MAX_DARK_THEME);
        }
        const result = importDefault(dependencyMap[0])(arg0).set("hsl.l", TEXT_LIGHTNESS_LIGHT_THEME);
        return result.hex();
      } else {
        return arg0;
      }
    }
  }
  if ("light" === arg2) {
    let BACKGROUND_LIGHTNESS_LIGHT_THEME = constants.BACKGROUND_LIGHTNESS_DARK_THEME;
  } else {
    BACKGROUND_LIGHTNESS_LIGHT_THEME = constants.BACKGROUND_LIGHTNESS_LIGHT_THEME;
  }
  const result1 = importDefault(dependencyMap[0])(arg0).set("hsl.l", BACKGROUND_LIGHTNESS_LIGHT_THEME);
  const result2 = result1.set("hsl.s", constants.BACKGROUND_SATURATION);
  return result2.hex();
};
export const transformColorForIncreasedContrast = function transformColorForIncreasedContrast(arg0, arg1, arg2, arg3) {
  if ("border" === arg2) {
    const items = [arg0, constants2.BORDER_MIN_OPACITY + arg1];
    let items3 = items;
  } else if ("text" === arg2) {
    let set = importDefault(dependencyMap[0])(arg0).set;
    if ("light" === arg3) {
      let TEXT_LIGHTNESS_DARK_THEME = constants2.TEXT_LIGHTNESS_LIGHT_THEME;
    } else {
      TEXT_LIGHTNESS_DARK_THEME = constants2.TEXT_LIGHTNESS_DARK_THEME;
    }
    set = set("hsl.l", TEXT_LIGHTNESS_DARK_THEME);
    const result = set.set("hsl.s", constants2.TEXT_SATURATION);
    const items1 = [result.hex(), arg1];
    const tmp6 = importDefault(dependencyMap[0])(arg0);
  } else {
    if ("background" === arg2) {
      if ("light" !== arg3) {
        const result1 = importDefault(dependencyMap[0])(arg0).set("hsl.l", constants2.BACKGROUND_LIGHTNESS_DARK_THEME);
        const items2 = [result1.hex(), arg1];
        items3 = items2;
        const obj = importDefault(dependencyMap[0])(arg0);
      }
    }
    items3 = [arg0, arg1];
  }
  return items3;
};
export const transformColorForReducedSaturation = function transformColorForReducedSaturation(arg0, category, saturation) {
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  const obj = importDefault(dependencyMap[0])(arg0);
  if ("background" === category) {
    [tmp2, tmp3] = [null, null];
    [tmp4, tmp5] = [true, true];
    const _HermesInternal2 = HermesInternal;
    const result = obj.set("hsl.s", "*" + tmp4 + (saturation - tmp2) / (tmp3 - tmp2) * (tmp5 - tmp4));
    return result.hex();
  } else {
    const _HermesInternal = HermesInternal;
    const result1 = obj.set("hsl.s", "*" + saturation);
    return result1.hex();
  }
};
export const transformColorContrast = function transformColorContrast(result, category, theme, contrast) {
  if ("background" !== category) {
    if ("border" !== category) {
      if ("text" === category) {
        const _HermesInternal = HermesInternal;
        result = importDefault(dependencyMap[0])(result).set("hsl.l", "*" + interpolate(closure_4, "light" === theme ? closure_8 : closure_7, contrast));
        return result.hex();
      } else {
        return result;
      }
    }
  }
  const result1 = importDefault(dependencyMap[0])(result).set("hsl.l", "*" + interpolate(closure_4, "light" === theme ? closure_6 : closure_5, contrast));
  return result1.hex();
};
