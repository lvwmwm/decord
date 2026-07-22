// Module ID: 7640
// Function ID: 61180
// Name: buildPlatformedThemedEmojiColorPalette
// Dependencies: []
// Exports: buildEmojiColorPalette

// Module 7640 (buildPlatformedThemedEmojiColorPalette)
function buildPlatformedThemedEmojiColorPalette(colors) {
  let saturationFactor;
  let num = colors.saturationFactor;
  if (num === undefined) {
    num = 1;
  }
  let flag = colors.shouldProcessMobileColors;
  if (flag === undefined) {
    flag = false;
  }
  let obj = { colors: colors.colors, saturationFactor: num };
  ({ colors, saturationFactor } = obj);
  if (saturationFactor === undefined) {
    saturationFactor = 1;
  }
  let tmp = null;
  if (null != colors) {
    tmp = null;
    if (colors.length >= 1) {
      let obj1 = require(dependencyMap[0]);
      const findColorByHsvResult = obj1.findColorByHsv(colors);
      let obj2 = importDefault(dependencyMap[1]);
      const parseStringResult = obj2.parseString(findColorByHsvResult);
      tmp = null;
      if (null != parseStringResult) {
        let obj4 = require(dependencyMap[0]);
        const rawRgbToHslResult = obj4.rawRgbToHsl(parseStringResult.red, parseStringResult.blue, parseStringResult.green);
        let obj5 = require(dependencyMap[0]);
        obj = {};
        let obj7 = require(dependencyMap[0]);
        const colorLightnessAdjusted = obj7.getColorLightnessAdjusted(parseStringResult, 0.6, true);
        obj.foreground = importDefault(dependencyMap[2])(colorLightnessAdjusted.toHexString());
        obj.background = importDefault(dependencyMap[2])(closure_3);
        obj.ratio = 3;
        obj.saturationFactor = saturationFactor;
        const accessibleForegroundColor = obj5.getAccessibleForegroundColor(obj);
        let tmp13 = parseStringResult;
        if (null != accessibleForegroundColor) {
          tmp13 = accessibleForegroundColor;
        }
        const tmp10 = importDefault(dependencyMap[2]);
        obj = {};
        const obj10 = require(dependencyMap[0]);
        const tmp17 = importDefault(dependencyMap[2]);
        const colorLightnessAdjusted1 = require(dependencyMap[0]).getColorLightnessAdjusted(parseStringResult, 0.6, false);
        obj.foreground = tmp17(colorLightnessAdjusted1.toHexString());
        obj.background = importDefault(dependencyMap[2])(closure_4);
        obj.ratio = 5;
        obj.saturationFactor = saturationFactor;
        const accessibleForegroundColor1 = obj10.getAccessibleForegroundColor(obj);
        let tmp20 = parseStringResult;
        if (null != accessibleForegroundColor1) {
          tmp20 = accessibleForegroundColor1;
        }
        const obj12 = require(dependencyMap[0]);
        obj1 = { foreground: importDefault(dependencyMap[2])(findColorByHsvResult), background: importDefault(dependencyMap[2])(closure_3), ratio: 7, saturationFactor };
        const accessibleForegroundColor2 = require(dependencyMap[0]).getAccessibleForegroundColor(obj1);
        const obj14 = require(dependencyMap[0]);
        obj2 = { foreground: importDefault(dependencyMap[2])(findColorByHsvResult), background: importDefault(dependencyMap[2])(closure_4), ratio: 7, saturationFactor };
        const accessibleForegroundColor3 = require(dependencyMap[0]).getAccessibleForegroundColor(obj2);
        const obj3 = {};
        obj4 = {};
        let hexResult;
        if (null != accessibleForegroundColor2) {
          hexResult = accessibleForegroundColor2.hex();
        }
        obj4.accentColor = hexResult;
        const obj17 = require(dependencyMap[0]);
        obj5 = { colorRGB: tmp13, saturationFactor };
        obj4.backgroundColor = require(dependencyMap[0]).getSaturatedColorHex(obj5);
        let toHexStringResult;
        if (null != parseStringResult) {
          toHexStringResult = parseStringResult.toHexString();
        }
        obj4.highlightColor = toHexStringResult;
        let saturation;
        if (null != rawRgbToHslResult) {
          saturation = rawRgbToHslResult.saturation;
        }
        let num10 = 0.1;
        if (saturation < 0.1) {
          num10 = 0.35;
        }
        obj4.opacity = num10;
        obj3.LIGHT = obj4;
        const obj6 = {};
        let hexResult1;
        if (null != accessibleForegroundColor3) {
          hexResult1 = accessibleForegroundColor3.hex();
        }
        obj6.accentColor = hexResult1;
        const obj22 = require(dependencyMap[0]);
        obj7 = { colorRGB: tmp20, saturationFactor };
        obj6.backgroundColor = require(dependencyMap[0]).getSaturatedColorHex(obj7);
        let toHexStringResult1;
        if (null != parseStringResult) {
          toHexStringResult1 = parseStringResult.toHexString();
        }
        obj6.highlightColor = toHexStringResult1;
        let saturation1;
        if (null != rawRgbToHslResult) {
          saturation1 = rawRgbToHslResult.saturation;
        }
        let num11 = 0.2;
        if (saturation1 < 0.1) {
          num11 = 0.5;
        }
        obj6.opacity = num11;
        obj3.DARK = obj6;
        tmp = obj3;
        const obj25 = require(dependencyMap[0]);
      }
    }
  }
  const obj8 = { palette: tmp, shouldProcessMobileColors: flag };
  return importDefault(dependencyMap[3]).applyPlatformToThemedEmojiColorPalette(obj8);
}
let closure_3 = "#ffffff";
let closure_4 = "#36393e";
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/emojis/utils/EmojiColorUtils.tsx");

export { buildPlatformedThemedEmojiColorPalette };
export const buildEmojiColorPalette = function buildEmojiColorPalette(colors, stateFromStores, stateFromStores1) {
  if (null != colors) {
    if (colors.length >= 1) {
      let obj = { colors, saturationFactor: stateFromStores };
      const tmp8 = buildPlatformedThemedEmojiColorPalette(obj);
      if (stateFromStores1) {
        let DARK;
        if (!tmp9) {
          DARK = tmp8.DARK;
        }
        let LIGHT = DARK;
      } else if (!tmp9) {
        LIGHT = tmp8.LIGHT;
      }
      obj = {};
      let backgroundColor;
      if (null != LIGHT) {
        backgroundColor = LIGHT.backgroundColor;
      }
      obj.backgroundColor = backgroundColor;
      let accentColor;
      if (null != LIGHT) {
        accentColor = LIGHT.accentColor;
      }
      obj.accentColor = accentColor;
      let highlightColor;
      if (null != LIGHT) {
        highlightColor = LIGHT.highlightColor;
      }
      obj.highlightColor = highlightColor;
      let opacity;
      if (null != LIGHT) {
        opacity = LIGHT.opacity;
      }
      let num = 0.15;
      if (null != opacity) {
        num = opacity;
      }
      obj.opacity = num;
      return obj;
    }
  }
  return null;
};
