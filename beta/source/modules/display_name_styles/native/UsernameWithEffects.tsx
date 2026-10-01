// Module ID: 10357
// Function ID: 10358
// Name: UsernameWithEffects
// Dependencies: [19, 17, 1390, 21, 1391, 4836, 576, 1365, 10358, 5084, 9189, 1389, 5085, 9188, 4531, 10359, 4832, 4842, 4534, 10362, 1370, 2]

// Module 10357 (UsernameWithEffects)
import nativeDefault from "native" /* 576 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1390 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1391 */;
import getNodeText from "getNodeText" /* 4534 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let userName;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ View: closure_4, processColor: hasOwnProperty, PixelRatio: metroRequire, StyleSheet: metroImportDefault } = react_native);
const MIN_PRISM_GRADIENT_WIDTH = DisplayNameStylesConstants.MIN_PRISM_GRADIENT_WIDTH;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = { [DisplayNameEffect.DisplayNameEffect.NEON]: 1, [DisplayNameEffect.DisplayNameEffect.TOON]: 1.6, [DisplayNameEffect.DisplayNameEffect.POP]: 1.2 };
let closure_12 = createStyles.createStyles((textShadowColor, arg1) => {
  let items;
  let num2;
  let num3;
  let num6;
  let obj3;
  let obj6;
  let rect1;
  let rect2;
  let rect3;
  let result2;
  let result3;
  let tmp4Result12;
  const result = 0.04 * arg1;
  const sum = 4 + 0.12 * arg1;
  const value = metroRequire.get();
  const sum1 = closure_11[DisplayNameEffect.DisplayNameEffect.NEON] + 0.04 * arg1;
  const sum2 = closure_11[DisplayNameEffect.DisplayNameEffect.TOON] + 0.04 * arg1;
  const sum3 = closure_11[DisplayNameEffect.DisplayNameEffect.POP] + 0.04 * arg1;
  const result1 = Math.floor(sum2 / 2) / value;
  const obj = { color: nativeDefault.colors.WHITE, textShadowColor, textShadowRadius: sum, textShadowOffset: { width: 0, height: 0 } };
  const obj2 = utils_PlatformUtils;
  if (obj2.isIOS()) {
    const rect = { top: result2, left: result2, padding: sum, marginVertical: -sum, marginLeft: -sum, marginRight: -sum - sum1 };
    result2 = -sum1 / 2;
    obj3 = rect;
  } else {
    obj3 = { left: -sum1, paddingRight: sum, marginRight: -sum - sum1 };
  }
  const obj4 = { neon: obj, popContainer: rect1, popBackLayer: rect2, popFrontLayer: { color: nativeDefault.colors.WHITE }, toon: rect3, layoutImpact: { flexShrink: 1, minWidth: 0 } };
  const merged = Object.assign(obj3);
  let num = 0;
  const tmp4Result = utils_PlatformUtils;
  if (tmp4Result.isIOS()) {
    num = -sum3 / 2;
  }
  rect1 = { position: "relative", top: num, left: num2, marginRight: num3 };
  num2 = 0;
  const tmp4Result7 = utils_PlatformUtils;
  if (tmp4Result7.isIOS()) {
    num2 = -sum3 / 2;
  }
  num3 = 0;
  const tmp4Result8 = utils_PlatformUtils;
  if (tmp4Result8.isIOS()) {
    num3 = -sum3;
  }
  rect2 = { color: textShadowColor, position: "absolute", left: 0, right: 0 };
  const tmp4Result9 = utils_PlatformUtils;
  if (tmp4Result9.isIOS()) {
    obj6 = { top: 1.2 + result };
    const obj5 = { top: 1.2 + result };
  } else {
    obj6 = { transform: items };
    items = [{ translateY: 1.2 + result }];
    const obj7 = { translateY: 1.2 + result };
  }
  const merged1 = Object.assign(obj6);
  ({ color: nativeDefault.colors.WHITE });
  rect3 = { color: tmp10(576).colors.WHITE, top: num6, left: result3, marginRight: tmp4Result12.isIOS() ? -sum2 : -result1 };
  num6 = 0;
  const tmp4Result10 = utils_PlatformUtils;
  if (tmp4Result10.isIOS()) {
    num6 = -sum2 / 2;
  }
  const tmp4Result11 = utils_PlatformUtils;
  if (tmp4Result11.isIOS()) {
    result3 = -sum2 / 2;
  } else {
    result3 = -result1;
  }
  tmp4Result12 = utils_PlatformUtils;
  return obj4;
});
const memoResult = react.memo((userName) => {
  let containerStyle;
  let defaultColor;
  let guildId;
  let ignoreDisabledStylesSetting;
  let items11;
  let items13;
  let items2;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj8;
  let pendingDisplayNameStyles;
  let sum;
  let tmp49;
  let tmp53;
  let userId;
  userName = userName.userName;
  let STATIC = userName.effectDisplayType;
  ({ userId, guildId } = userName);
  if (STATIC === undefined) {
    STATIC = userName(10358).EffectDisplayType.STATIC;
  }
  ({ defaultColor, containerStyle, ignoreDisabledStylesSetting, pendingDisplayNameStyles } = userName);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  const merged = Object.assign(userName, Object.assign({ userId: 0, guildId: 0, userName: 0, effectDisplayType: 0, pendingDisplayNameStyles: 0, defaultColor: 0, containerStyle: 0, ignoreDisabledStylesSetting: 0 }));
  let num2;
  const tmp7 = num2(5084)({ userId, guildId, pendingDisplayNameStyles, ignoreDisabledStylesSetting });
  let obj = userName(9189);
  const isDisplayNameStylesFlywheelViewersEnabled = obj.useIsDisplayNameStylesFlywheelViewersEnabled("UsernameWithEffects");
  const obj2 = userName(1389);
  const result = obj2.applyFlywheelViewingFallback(tmp7, isDisplayNameStylesFlywheelViewersEnabled);
  const obj3 = userName(5085);
  const displayNameStylesEnabled = obj3.useDisplayNameStylesEnabled({ location: "UsernameWithEffects" });
  const obj4 = userName(9188);
  const displayNameStylesFont = obj4.useDisplayNameStylesFont({ displayNameStyles: result, ignoreDisabledStylesSetting });
  let tmp13;
  if (null != displayNameStylesFont) {
    tmp13 = { fontFamily: displayNameStylesFont, lineHeight: "a" };
    const obj5 = { fontFamily: displayNameStylesFont, lineHeight: "a" };
  }
  let num = merged.lineClamp;
  if (num == null) {
    num = 1;
  }
  let tmp14 = tmp13;
  if (num <= 1) {
    let tmp15;
    if (null != displayNameStylesFont) {
      tmp15 = { fontFamily: displayNameStylesFont };
      const obj6 = { fontFamily: displayNameStylesFont };
    }
    tmp14 = tmp15;
  }
  const tmp8Result = userName(4531);
  const token = tmp8Result.useToken(tmp5(576).colors.BACKGROUND_BASE_LOW);
  const tmp8Result7 = userName(4531);
  const token1 = tmp8Result7.useToken(tmp5(576).colors.WHITE);
  const tmp8Result8 = userName(10359);
  const displayNameStylesAccessibleColors = tmp8Result8.useDisplayNameStylesAccessibleColors({ displayNameStyles: result, backgroundColor: token });
  let first;
  if (displayNameStylesAccessibleColors.length > 0) {
    first = displayNameStylesAccessibleColors[0];
  }
  let effectId;
  if (result != null) {
    effectId = result.effectId;
  }
  if (effectId == null) {
    effectId = tmp8(1391).DisplayNameEffect.SOLID;
  }
  let colorVariants = null;
  if (null != first) {
    const tmp8Result9 = userName(1389);
    colorVariants = tmp8Result9.generateColorVariants(first);
  }
  const TextStyleSheet = tmp8(4832).TextStyleSheet;
  const tmp8Result10 = userName(4842);
  const tmp21 = TextStyleSheet[tmp8Result10.useTypographyVariantRemap(tmp8Result10, merged.variant, false)];
  const flattenResult = closure_7.flatten(merged.style);
  num2 = undefined;
  if (flattenResult != null) {
    num2 = flattenResult.fontSize;
  }
  if (num2 == null) {
    let fontSize;
    if (tmp21 != null) {
      fontSize = tmp21.fontSize;
    }
    num2 = fontSize;
  }
  if (num2 == null) {
    num2 = 16;
  }
  let lineHeight;
  if (flattenResult != null) {
    lineHeight = flattenResult.lineHeight;
  }
  if (lineHeight == null) {
    let lineHeight1;
    if (tmp21 != null) {
      lineHeight1 = tmp21.lineHeight;
    }
    lineHeight = lineHeight1;
  }
  if (lineHeight == null) {
    lineHeight = 1.25 * num2;
  }
  const items = [userName, num2];
  const memo = react.useMemo(() => {
    const obj = getNodeText;
    const nodeText = obj.getNodeText(userName);
    let num;
    if (nodeText != null) {
      num = nodeText.length;
    }
    if (num == null) {
      num = 10;
    }
    return num * num2 * 0.6;
  }, items);
  if (null != closure_11[effectId]) {
    sum = tmp27 + 0.04 * num2;
  }
  let str;
  const tmp29 = closure_12;
  if (colorVariants != null) {
    str = colorVariants.main;
  }
  if (str == null) {
    str = "";
  }
  const tmp29Result = tmp29(str, num2);
  if (displayNameStylesEnabled) {
    if (null != tmp7) {
      if (STATIC !== userName(10358).EffectDisplayType.PLAIN) {
        if (null != colorVariants) {
          let layoutImpact;
          const items1 = [merged.style, tmp14];
          const tmp8Result11 = userName(1389);
          if (tmp8Result11.doesEffectImpactLayout(effectId)) {
            layoutImpact = tmp29Result.layoutImpact;
          }
          if (effectId === userName(1391).DisplayNameEffect.GUMMY) {
            const tmp5Result = num2(10362);
            const tmp8Result12 = userName(4534);
            let str3 = tmp8Result12.getNodeText(userName);
            const tmp67 = closure_9;
            if (str3 == null) {
              str3 = "";
            }
            const obj7 = { name: str3, containerStyle: items2, textStyle: items1, textProps: obj8, colors: displayNameStylesAccessibleColors };
            items2 = [layoutImpact, containerStyle];
            obj8 = { gradientColors: undefined, gradientLength: memo, gradientMode: "clamp", gradientAngle: undefined, textStrokeWidth: undefined, textStrokeColor: undefined };
            const merged1 = Object.assign(merged);
            return tmp67(tmp5Result, obj7);
          } else {
            let bound;
            let tmp34;
            let items10;
            let num5;
            if (userName(1391).DisplayNameEffect.GRADIENT !== effectId) {
              let tmp32;
              let tmp33;
              if (userName(1391).DisplayNameEffect.PRISM !== effectId) {
                if (userName(1391).DisplayNameEffect.NEON === effectId) {
                  let neonStroke;
                  const tmp54 = closure_5;
                  if (colorVariants != null) {
                    neonStroke = colorVariants.neonStroke;
                  }
                  const tmp54Result = tmp54(neonStroke);
                  let tmp57;
                  if (null != tmp54Result) {
                    tmp57 = tmp54Result;
                  }
                  const items3 = [items1, tmp29Result.neon, layoutImpact];
                  tmp32 = tmp57;
                  bound = memo;
                  items10 = items3;
                  tmp33 = sum;
                } else if (userName(1391).DisplayNameEffect.POP === effectId) {
                  let dark2;
                  if (colorVariants != null) {
                    dark2 = colorVariants.dark2;
                  }
                  const tmp38Result = closure_5(dark2);
                  let main;
                  if (colorVariants != null) {
                    main = colorVariants.main;
                  }
                  const tmp38Result2 = closure_5(main);
                  bound = memo;
                  items10 = items1;
                  if (null != colorVariants) {
                    const obj9 = { style: items4, children: items6 };
                    items4 = [tmp29Result.popContainer, layoutImpact, containerStyle];
                    const obj10 = { textStrokeWidth: sum, textStrokeColor: tmp49, style: items5, children: userName };
                    const Text = tmp8(4832).Text;
                    const merged2 = Object.assign(merged);
                    tmp49 = undefined;
                    const tmp43 = closure_10;
                    const tmp44 = closure_4;
                    if (null != tmp38Result2) {
                      tmp49 = tmp38Result2;
                    }
                    items5 = [items1, tmp29Result.popBackLayer];
                    items6 = [closure_9(Text, obj10), ];
                    const obj11 = { textStrokeWidth: sum, textStrokeColor: tmp53, style: items7, children: userName };
                    const Text2 = tmp8(4832).Text;
                    const merged3 = Object.assign(merged);
                    tmp53 = undefined;
                    if (null != tmp38Result) {
                      tmp53 = tmp38Result;
                    }
                    items7 = [items1, tmp29Result.popFrontLayer];
                    items6[1] = closure_9(Text2, obj11);
                    return tmp43(tmp44, obj9);
                  }
                } else if (userName(1391).DisplayNameEffect.TOON === effectId) {
                  const items8 = [items1, tmp29Result.toon, layoutImpact];
                  const items9 = [closure_5(token1), closure_5(colorVariants.light2), closure_5(colorVariants.light1), closure_5(colorVariants.main)];
                  const tmp36 = closure_5(colorVariants.toonStroke);
                  let tmp37;
                  if (null != tmp36) {
                    tmp37 = tmp36;
                  }
                  num5 = 90;
                  tmp32 = tmp37;
                  bound = lineHeight;
                  items10 = items8;
                  tmp33 = sum;
                  tmp34 = items9;
                } else {
                  const SOLID = tmp8(1391).DisplayNameEffect.SOLID;
                  items10 = [items1, ];
                  const obj12 = { color: first };
                  items10[1] = obj12;
                  bound = memo;
                }
              }
              const obj13 = { gradientColors: tmp34, gradientLength: bound, gradientMode: "clamp", style: items11, gradientAngle: num5, textStrokeWidth: tmp33, textStrokeColor: tmp32, children: userName };
              const Text3 = tmp8(4832).Text;
              const merged4 = Object.assign(merged);
              items11 = [items10];
              return closure_9(Text3, obj13);
            }
            const mapped = displayNameStylesAccessibleColors.map((item) => closure_1_5(item));
            const found = mapped.filter(tmp8(1370).isNotNullish);
            let num6 = 45;
            if (effectId === userName(1391).DisplayNameEffect.PRISM) {
              num6 = 0;
            }
            bound = memo;
            items10 = items1;
            num5 = num6;
            tmp34 = found;
            if (effectId === userName(1391).DisplayNameEffect.PRISM) {
              let tmp58 = found;
              if (found.length > 0) {
                const items12 = [];
                items12[HermesBuiltin.arraySpread(items12, found, 0)] = found[0];
                tmp58 = items12;
              }
              const _Math = Math;
              bound = Math.max(memo, MIN_PRISM_GRADIENT_WIDTH);
              tmp34 = tmp58;
              items10 = items1;
              num5 = num6;
            }
          }
        }
      }
      const obj14 = { style: items13, color: defaultColor, children: userName };
      const Text4 = tmp8(4832).Text;
      const merged5 = Object.assign(merged);
      items13 = [merged.style, tmp13];
      return closure_9(Text4, obj14);
    }
  }
  const obj15 = { color: defaultColor, children: userName };
  const Text5 = tmp8(4832).Text;
  const merged6 = Object.assign(merged);
  return closure_9(Text5, obj15);
});
let result = size.fileFinishedImporting("modules/display_name_styles/native/UsernameWithEffects.tsx");

export default memoResult;
export const AVERAGE_FONT_WIDTH_RATIO = 0.6;
