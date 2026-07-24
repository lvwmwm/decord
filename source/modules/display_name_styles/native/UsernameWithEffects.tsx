// Module ID: 8558
// Function ID: 68158
// Name: calculateStrokeWidth
// Dependencies: [31, 27, 1861, 33, 1862, 4130, 689, 478, 3994, 8559, 4361, 8560, 1860, 4362, 8561, 3834, 8562, 4126, 4135, 3837, 8565, 1327, 2]

// Module 8558 (calculateStrokeWidth)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { MIN_PRISM_GRADIENT_WIDTH } from "items3";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
function calculateStrokeWidth(arg0, arg1) {
  return arg0 + 0.04 * arg1;
}
({ View: closure_4, processColor: closure_5, PixelRatio: closure_6, StyleSheet: closure_7 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = { [arg1(1862).DisplayNameEffect.NEON]: 1, [arg1(1862).DisplayNameEffect.TOON]: 1.6, [arg1(1862).DisplayNameEffect.POP]: 1.2 };
let closure_12 = _createForOfIteratorHelperLoose.createStyles((color) => {
  const sum = 4 + 0.12 * arg1;
  const value = closure_6.get();
  const result = 0.04 * arg1;
  const tmp4 = calculateStrokeWidth(dependencyMap[require(undefined, 1862) /* DisplayNameEffect */.DisplayNameEffect.NEON], arg1);
  const tmp5 = calculateStrokeWidth(dependencyMap[require(undefined, 1862) /* DisplayNameEffect */.DisplayNameEffect.TOON], arg1);
  const tmp6 = calculateStrokeWidth(dependencyMap[require(undefined, 1862) /* DisplayNameEffect */.DisplayNameEffect.POP], arg1);
  const result1 = Math.floor(tmp5 / 2) / value;
  let obj = {};
  obj = { color: importDefault(689).colors.WHITE, textShadowColor: color, textShadowRadius: sum, textShadowOffset: { width: 0, height: 0 } };
  let obj2 = require(478) /* isWindows */;
  if (obj2.isIOS()) {
    obj = {};
    const result2 = -tmp4 / 2;
    obj.top = result2;
    obj.left = result2;
    obj.padding = sum;
    obj.marginVertical = -sum;
    obj.marginLeft = -sum;
    obj.marginRight = -sum - tmp4;
    let obj1 = obj;
  } else {
    obj1 = { left: -tmp4, paddingRight: sum, marginRight: -sum - tmp4 };
  }
  const merged = Object.assign(obj1);
  obj.neon = obj;
  obj2 = { position: "relative" };
  let obj6 = require(478) /* isWindows */;
  let num = 0;
  if (obj6.isIOS()) {
    num = -tmp6 / 2;
  }
  obj2.top = num;
  let obj7 = require(478) /* isWindows */;
  let num2 = 0;
  if (obj7.isIOS()) {
    num2 = -tmp6 / 2;
  }
  obj2.left = num2;
  let num3 = 0;
  if (obj9.isIOS()) {
    num3 = -tmp6;
  }
  obj2.marginRight = num3;
  obj.popContainer = obj2;
  const obj3 = { color, position: "absolute" };
  obj9 = require(478) /* isWindows */;
  const obj4 = {};
  const sum1 = 1.2 + result;
  if (obj11.isIosFabric()) {
    obj4.top = sum1;
    let tmp12 = obj4;
  } else {
    const obj5 = { translateY: sum1 };
    const items = [obj5];
    obj4.transform = items;
    tmp12 = obj4;
  }
  const merged1 = Object.assign(tmp12);
  obj.popBackLayer = obj3;
  obj6 = { color: importDefault(689).colors.WHITE };
  obj.popFrontLayer = obj6;
  obj7 = { color: importDefault(689).colors.WHITE };
  obj11 = require(3994) /* isFabric */;
  let num4 = 0;
  if (obj16.isIOS()) {
    num4 = -tmp5 / 2;
  }
  obj7.top = num4;
  obj16 = require(478) /* isWindows */;
  if (obj17.isIOS()) {
    let result3 = -tmp5 / 2;
  } else {
    result3 = -result1;
  }
  obj7.left = result3;
  obj17 = require(478) /* isWindows */;
  obj7.marginRight = require(478) /* isWindows */.isIOS() ? -tmp5 : -result1;
  obj.toon = obj7;
  return obj;
});
const memoResult = importAllResult.memo((userName) => {
  let defaultColor;
  let guildId;
  let ignoreDisabledStylesSetting;
  let pendingDisplayNameStyles;
  let userId;
  userName = userName.userName;
  let STATIC = userName.effectDisplayType;
  ({ userId, guildId } = userName);
  if (STATIC === undefined) {
    let merged5 = userName;
    STATIC = userName(8559).EffectDisplayType.STATIC;
  }
  ({ defaultColor, ignoreDisabledStylesSetting, pendingDisplayNameStyles } = userName);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  let obj = { userId: 0, guildId: 0, userName: 0, effectDisplayType: 0, pendingDisplayNameStyles: 0, defaultColor: 0, ignoreDisabledStylesSetting: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(userName, obj);
  let num2;
  obj = { userId, guildId, pendingDisplayNameStyles, ignoreDisabledStylesSetting };
  const tmp5 = num2(4361)(obj);
  let obj2 = userName(8560);
  const isDisplayNameStylesFlywheelViewersEnabled = obj2.useIsDisplayNameStylesFlywheelViewersEnabled("UsernameWithEffects");
  let obj3 = userName(1860);
  const result = obj3.applyFlywheelViewingFallback(tmp5, isDisplayNameStylesFlywheelViewersEnabled);
  let obj4 = userName(4362);
  const displayNameStylesEnabled = obj4.useDisplayNameStylesEnabled({ location: "UsernameWithEffects" });
  let obj5 = userName(8561);
  obj = { displayNameStyles: result, ignoreDisabledStylesSetting };
  const displayNameStylesFont = obj5.useDisplayNameStylesFont(obj);
  let obj7 = userName(3834);
  const token = obj7.useToken(num2(689).colors.BACKGROUND_BASE_LOW);
  let obj8 = userName(3834);
  num2 = 16;
  const token1 = obj8.useToken(num2(689).colors.WHITE);
  let obj9 = userName(8562);
  const displayNameStylesAccessibleColors = obj9.useDisplayNameStylesAccessibleColors({ displayNameStyles: result, backgroundColor: token });
  let first;
  if (displayNameStylesAccessibleColors.length > 0) {
    first = displayNameStylesAccessibleColors[0];
  }
  let effectId;
  if (null != result) {
    effectId = result.effectId;
  }
  if (null == effectId) {
    effectId = userName(1862).DisplayNameEffect.SOLID;
  }
  let colorVariants = null;
  if (null != first) {
    let obj10 = userName(1860);
    colorVariants = obj10.generateColorVariants(first);
  }
  let obj11 = userName(4135);
  const tmp19 = userName(4126).TextStyleSheet[obj11.useTypographyVariantRemap(obj11, merged.variant, false)];
  const flattenResult = closure_7.flatten(merged.style);
  let fontSize;
  if (null != flattenResult) {
    fontSize = flattenResult.fontSize;
  }
  if (null == fontSize) {
    let fontSize1;
    if (null != tmp19) {
      fontSize1 = tmp19.fontSize;
    }
    fontSize = fontSize1;
  }
  if (null != fontSize) {
    num2 = fontSize;
  }
  let lineHeight;
  if (null != flattenResult) {
    lineHeight = flattenResult.lineHeight;
  }
  if (null == lineHeight) {
    let lineHeight1;
    if (null != tmp19) {
      lineHeight1 = tmp19.lineHeight;
    }
    lineHeight = lineHeight1;
  }
  if (null == lineHeight) {
    lineHeight = 1.25 * num2;
  }
  const items = [userName, num2];
  const memo = importAllResult.useMemo(() => {
    let length;
    const nodeText = userName(outer1_2[19]).getNodeText(userName);
    if (null != nodeText) {
      length = nodeText.length;
    }
    let num = 10;
    if (null != length) {
      num = length;
    }
    return num * num2 * 0.6;
  }, items);
  if (null != dependencyMap[effectId]) {
    const tmp27 = calculateStrokeWidth(tmp26, num2);
  }
  let main;
  if (null != colorVariants) {
    main = colorVariants.main;
  }
  let str = "";
  let str2 = "";
  if (null != main) {
    str2 = main;
  }
  const tmp29Result = closure_12(str2, num2);
  if (displayNameStylesEnabled) {
    if (null != tmp5) {
      merged5 = userName;
      merged5 = dependencyMap;
      if (STATIC !== userName(8559).EffectDisplayType.PLAIN) {
        if (null != colorVariants) {
          const items1 = [merged.style, ];
          let tmp32 = null != displayNameStylesFont;
          if (tmp32) {
            const obj1 = { fontFamily: displayNameStylesFont };
            tmp32 = obj1;
          }
          items1[1] = tmp32;
          if (effectId === userName(1862).DisplayNameEffect.GUMMY) {
            obj2 = {};
            const tmp87 = callback2;
            const tmp90 = num2(8565);
            let nodeText = userName(3837).getNodeText(userName);
            if (null != nodeText) {
              str = nodeText;
            }
            obj2.name = str;
            obj2.textStyle = items1;
            obj3 = {};
            const merged1 = Object.assign(merged);
            obj3["gradientColors"] = undefined;
            obj3["gradientLength"] = memo;
            obj3["gradientMode"] = "clamp";
            obj3["gradientAngle"] = undefined;
            obj3["textStrokeWidth"] = undefined;
            obj3["textStrokeColor"] = undefined;
            obj2.textProps = obj3;
            obj2.colors = displayNameStylesAccessibleColors;
            return tmp87(tmp90, obj2);
          } else {
            merged5 = userName;
            merged5 = dependencyMap;
            if (userName(1862).DisplayNameEffect.GRADIENT !== effectId) {
              merged5 = userName;
              merged5 = dependencyMap;
              if (userName(1862).DisplayNameEffect.PRISM !== effectId) {
                merged5 = userName;
                merged5 = dependencyMap;
                if (userName(1862).DisplayNameEffect.NEON === effectId) {
                  let neonStroke;
                  if (null != colorVariants) {
                    neonStroke = colorVariants.neonStroke;
                  }
                  const tmp66Result = callback(neonStroke);
                  let tmp69;
                  if (null != tmp66Result) {
                    tmp69 = tmp66Result;
                  }
                  const items2 = [items1, tmp29Result.neon];
                  let tmp39 = tmp69;
                  let tmp38 = tmp27;
                  let items8 = items2;
                  let bound = memo;
                  const tmp66 = callback;
                } else {
                  merged5 = userName;
                  merged5 = dependencyMap;
                  if (userName(1862).DisplayNameEffect.POP === effectId) {
                    let dark2;
                    if (null != colorVariants) {
                      dark2 = colorVariants.dark2;
                    }
                    const tmp44Result = callback(dark2);
                    let main1;
                    if (null != colorVariants) {
                      main1 = colorVariants.main;
                    }
                    const tmp47Result = callback(main1);
                    items8 = items1;
                    bound = memo;
                    if (null != colorVariants) {
                      obj4 = { style: tmp29Result.popContainer };
                      obj5 = {};
                      const merged2 = Object.assign(merged);
                      obj5["textStrokeWidth"] = tmp27;
                      let tmp58;
                      if (null != tmp47Result) {
                        tmp58 = tmp47Result;
                      }
                      obj5["textStrokeColor"] = tmp58;
                      const items3 = [items1, tmp29Result.popBackLayer];
                      obj5["style"] = items3;
                      obj5["children"] = userName;
                      const items4 = [callback2(userName(4126).Text, obj5), ];
                      const obj6 = {};
                      const merged3 = Object.assign(merged);
                      obj6["textStrokeWidth"] = tmp27;
                      let tmp65;
                      if (null != tmp44Result) {
                        tmp65 = tmp44Result;
                      }
                      obj6["textStrokeColor"] = tmp65;
                      const items5 = [items1, tmp29Result.popFrontLayer];
                      obj6["style"] = items5;
                      obj6["children"] = userName;
                      items4[1] = callback2(userName(4126).Text, obj6);
                      obj4.children = items4;
                      return closure_10(closure_4, obj4);
                    }
                    const tmp44 = callback;
                    const tmp47 = callback;
                  } else {
                    merged5 = userName;
                    merged5 = dependencyMap;
                    if (userName(1862).DisplayNameEffect.TOON === effectId) {
                      const items6 = [items1, tmp29Result.toon];
                      const items7 = [callback(token1), callback(colorVariants.light2), callback(colorVariants.light1), callback(colorVariants.main)];
                      const tmp42 = callback(colorVariants.toonStroke);
                      let tmp43;
                      if (null != tmp42) {
                        tmp43 = tmp42;
                      }
                      let num6 = 90;
                      tmp39 = tmp43;
                      let tmp37 = items7;
                      tmp38 = tmp27;
                      items8 = items6;
                      bound = lineHeight;
                    } else {
                      const SOLID = userName(1862).DisplayNameEffect.SOLID;
                      items8 = [items1, ];
                      obj7 = { color: first };
                      items8[1] = obj7;
                      bound = memo;
                    }
                  }
                }
              }
              obj8 = {};
              const merged4 = Object.assign(merged);
              obj8["gradientColors"] = tmp37;
              obj8["gradientLength"] = bound;
              obj8["gradientMode"] = "clamp";
              const items9 = [items8];
              obj8["style"] = items9;
              obj8["gradientAngle"] = num6;
              obj8["textStrokeWidth"] = tmp38;
              obj8["textStrokeColor"] = tmp39;
              obj8["children"] = userName;
              return callback2(userName(4126).Text, obj8);
            }
            const mapped = displayNameStylesAccessibleColors.map((arg0) => outer1_5(arg0));
            const found = mapped.filter(userName(1327).isNotNullish);
            let num8 = 45;
            if (effectId === userName(1862).DisplayNameEffect.PRISM) {
              num8 = 0;
            }
            tmp37 = found;
            num6 = num8;
            items8 = items1;
            bound = memo;
            if (effectId === userName(1862).DisplayNameEffect.PRISM) {
              let tmp74 = found;
              if (found.length > 0) {
                const items10 = [];
                const arraySpreadResult = HermesBuiltin.arraySpread(found, 0);
                items10[arraySpreadResult] = found[0];
                const sum = arraySpreadResult + 1;
                tmp74 = items10;
              }
              const _Math = Math;
              bound = Math.max(memo, MIN_PRISM_GRADIENT_WIDTH);
              tmp37 = tmp74;
              num6 = num8;
              items8 = items1;
            }
          }
        }
      }
      obj9 = {};
      merged5 = merged;
      merged5 = Object.assign(merged);
      obj9["gradientLength"] = memo;
      obj9["gradientMode"] = "clamp";
      const items11 = [merged.style, ];
      merged5 = null != displayNameStylesFont;
      if (merged5) {
        obj10 = { fontFamily: displayNameStylesFont, lineHeight: undefined };
        merged5 = obj10;
      }
      items11[1] = merged5;
      obj9["style"] = items11;
      obj9["color"] = defaultColor;
      obj9["children"] = userName;
      return callback2(userName(4126).Text, obj9);
    }
  }
  obj11 = {};
  merged5 = Object.assign(merged);
  obj11["color"] = defaultColor;
  obj11["children"] = userName;
  return callback2(userName(4126).Text, obj11);
});
let result = require("items3").fileFinishedImporting("modules/display_name_styles/native/UsernameWithEffects.tsx");

export default memoResult;
export const AVERAGE_FONT_WIDTH_RATIO = 0.6;
