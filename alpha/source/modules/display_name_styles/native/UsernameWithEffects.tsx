// Module ID: 10772
// Function ID: 10773
// Name: UsernameWithEffects
// Dependencies: [19, 17, 1401, 21, 1402, 5014, 575, 1376, 10773, 6439, 6440, 9290, 5596, 10774, 1400, 5624, 5629, 5188, 10777, 1379, 2]

// Module 10772 (UsernameWithEffects)
import nativeDefault from "native" /* 575 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1376 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1401 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1402 */;
import getNodeText from "getNodeText" /* 5188 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

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
  rect3 = { color: tmp10(575).colors.WHITE, top: num6, left: result3, marginRight: tmp4Result12.isIOS() ? -sum2 : -result1 };
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
const memoResult = react.memo(function UsernameWithEffects(userName) {
  let containerStyle;
  let defaultColor;
  let guildId;
  let ignoreDisabledStylesSetting;
  let items12;
  let items2;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj6;
  let pendingDisplayNameStyles;
  let sum;
  let tmp47;
  let tmp51;
  let userId;
  userName = userName.userName;
  let STATIC = userName.effectDisplayType;
  ({ userId, guildId } = userName);
  if (STATIC === undefined) {
    STATIC = userName(10773).EffectDisplayType.STATIC;
  }
  ({ defaultColor, containerStyle, ignoreDisabledStylesSetting, pendingDisplayNameStyles } = userName);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  const merged = Object.assign(userName, Object.assign({ userId: 0, guildId: 0, userName: 0, effectDisplayType: 0, pendingDisplayNameStyles: 0, defaultColor: 0, containerStyle: 0, ignoreDisabledStylesSetting: 0 }));
  let num2;
  const tmp7 = num2(6439)({ userId, guildId, pendingDisplayNameStyles, ignoreDisabledStylesSetting });
  let obj = userName(6440);
  const displayNameStylesEnabled = obj.useDisplayNameStylesEnabled({ location: "UsernameWithEffects" });
  const obj2 = userName(9290);
  const displayNameStylesFont = obj2.useDisplayNameStylesFont({ displayNameStyles: tmp7, ignoreDisabledStylesSetting });
  let tmp11;
  if (null != displayNameStylesFont) {
    tmp11 = { fontFamily: displayNameStylesFont, lineHeight: "a" };
    const obj3 = { fontFamily: displayNameStylesFont, lineHeight: "a" };
  }
  let num = merged.lineClamp;
  if (num == null) {
    num = 1;
  }
  let tmp12 = tmp11;
  if (num <= 1) {
    let tmp13;
    if (null != displayNameStylesFont) {
      tmp13 = { fontFamily: displayNameStylesFont };
      const obj4 = { fontFamily: displayNameStylesFont };
    }
    tmp12 = tmp13;
  }
  const tmp8Result = userName(5596);
  const token = tmp8Result.useToken(tmp5(575).colors.BACKGROUND_BASE_LOW);
  const tmp8Result7 = userName(5596);
  const token1 = tmp8Result7.useToken(tmp5(575).colors.WHITE);
  const tmp8Result8 = userName(10774);
  const displayNameStylesAccessibleColors = tmp8Result8.useDisplayNameStylesAccessibleColors({ displayNameStyles: tmp7, backgroundColor: token });
  let first;
  if (displayNameStylesAccessibleColors.length > 0) {
    first = displayNameStylesAccessibleColors[0];
  }
  let effectId;
  if (tmp7 != null) {
    effectId = tmp7.effectId;
  }
  if (effectId == null) {
    effectId = tmp8(1402).DisplayNameEffect.SOLID;
  }
  let colorVariants = null;
  if (null != first) {
    const tmp8Result9 = userName(1400);
    colorVariants = tmp8Result9.generateColorVariants(first);
  }
  const TextStyleSheet = tmp8(5624).TextStyleSheet;
  const tmp8Result10 = userName(5629);
  const tmp19 = TextStyleSheet[tmp8Result10.useTypographyVariantRemap(tmp8Result10, merged.variant, false)];
  const flattenResult = closure_7.flatten(merged.style);
  num2 = undefined;
  if (flattenResult != null) {
    num2 = flattenResult.fontSize;
  }
  if (num2 == null) {
    let fontSize;
    if (tmp19 != null) {
      fontSize = tmp19.fontSize;
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
    if (tmp19 != null) {
      lineHeight1 = tmp19.lineHeight;
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
    sum = tmp25 + 0.04 * num2;
  }
  let str;
  const tmp27 = closure_12;
  if (colorVariants != null) {
    str = colorVariants.main;
  }
  if (str == null) {
    str = "";
  }
  const tmp27Result = tmp27(str, num2);
  if (displayNameStylesEnabled) {
    if (null != tmp7) {
      if (STATIC !== userName(10773).EffectDisplayType.PLAIN) {
        if (null != colorVariants) {
          let layoutImpact;
          const items1 = [merged.style, tmp12];
          const tmp8Result11 = userName(1400);
          if (tmp8Result11.doesEffectImpactLayout(effectId)) {
            layoutImpact = tmp27Result.layoutImpact;
          }
          if (effectId === userName(1402).DisplayNameEffect.GUMMY) {
            const tmp5Result = num2(10777);
            const tmp8Result12 = userName(5188);
            let str3 = tmp8Result12.getNodeText(userName);
            const tmp65 = closure_9;
            if (str3 == null) {
              str3 = "";
            }
            const obj5 = { name: str3, containerStyle: items2, textStyle: items1, textProps: obj6, colors: displayNameStylesAccessibleColors };
            items2 = [layoutImpact, containerStyle];
            obj6 = { gradientColors: undefined, gradientLength: memo, gradientMode: "clamp", gradientAngle: undefined, textStrokeWidth: undefined, textStrokeColor: undefined };
            const merged1 = Object.assign(merged);
            return tmp65(tmp5Result, obj5);
          } else {
            let bound;
            let tmp32;
            let items10;
            let num5;
            if (userName(1402).DisplayNameEffect.GRADIENT !== effectId) {
              let tmp30;
              let tmp31;
              if (userName(1402).DisplayNameEffect.PRISM !== effectId) {
                if (userName(1402).DisplayNameEffect.NEON === effectId) {
                  let neonStroke;
                  const tmp52 = closure_5;
                  if (colorVariants != null) {
                    neonStroke = colorVariants.neonStroke;
                  }
                  const tmp52Result = tmp52(neonStroke);
                  let tmp55;
                  if (null != tmp52Result) {
                    tmp55 = tmp52Result;
                  }
                  const items3 = [items1, tmp27Result.neon, layoutImpact];
                  tmp30 = tmp55;
                  bound = memo;
                  items10 = items3;
                  tmp31 = sum;
                } else if (userName(1402).DisplayNameEffect.POP === effectId) {
                  let dark2;
                  if (colorVariants != null) {
                    dark2 = colorVariants.dark2;
                  }
                  const tmp36Result = closure_5(dark2);
                  let main;
                  if (colorVariants != null) {
                    main = colorVariants.main;
                  }
                  const tmp36Result2 = closure_5(main);
                  bound = memo;
                  items10 = items1;
                  if (null != colorVariants) {
                    const obj7 = { style: items4, children: items6 };
                    items4 = [tmp27Result.popContainer, layoutImpact, containerStyle];
                    const obj8 = { textStrokeWidth: sum, textStrokeColor: tmp47, style: items5, children: userName };
                    const Text = tmp8(5624).Text;
                    const merged2 = Object.assign(merged);
                    tmp47 = undefined;
                    const tmp41 = closure_10;
                    const tmp42 = closure_4;
                    if (null != tmp36Result2) {
                      tmp47 = tmp36Result2;
                    }
                    items5 = [items1, tmp27Result.popBackLayer];
                    items6 = [closure_9(Text, obj8), ];
                    const obj9 = { textStrokeWidth: sum, textStrokeColor: tmp51, style: items7, children: userName };
                    const Text2 = tmp8(5624).Text;
                    const merged3 = Object.assign(merged);
                    tmp51 = undefined;
                    if (null != tmp36Result) {
                      tmp51 = tmp36Result;
                    }
                    items7 = [items1, tmp27Result.popFrontLayer];
                    items6[1] = closure_9(Text2, obj9);
                    return tmp41(tmp42, obj7);
                  }
                } else if (userName(1402).DisplayNameEffect.TOON === effectId) {
                  const items8 = [items1, tmp27Result.toon, layoutImpact];
                  const items9 = [closure_5(token1), closure_5(colorVariants.light2), closure_5(colorVariants.light1), closure_5(colorVariants.main)];
                  const tmp34 = closure_5(colorVariants.toonStroke);
                  let tmp35;
                  if (null != tmp34) {
                    tmp35 = tmp34;
                  }
                  num5 = 90;
                  tmp30 = tmp35;
                  bound = lineHeight;
                  items10 = items8;
                  tmp31 = sum;
                  tmp32 = items9;
                } else {
                  const SOLID = tmp8(1402).DisplayNameEffect.SOLID;
                  items10 = [items1, ];
                  const obj10 = { color: first };
                  items10[1] = obj10;
                  bound = memo;
                }
              }
              const obj11 = { gradientColors: tmp32, gradientLength: bound, gradientMode: "clamp", style: items10, gradientAngle: num5, textStrokeWidth: tmp31, textStrokeColor: tmp30, children: userName };
              const Text3 = tmp8(5624).Text;
              const merged4 = Object.assign(merged);
              return closure_9(Text3, obj11);
            }
            const mapped = displayNameStylesAccessibleColors.map((item) => closure_1_5(item));
            const found = mapped.filter(tmp8(1379).isNotNullish);
            let num6 = 45;
            if (effectId === userName(1402).DisplayNameEffect.PRISM) {
              num6 = 0;
            }
            bound = memo;
            items10 = items1;
            num5 = num6;
            tmp32 = found;
            if (effectId === userName(1402).DisplayNameEffect.PRISM) {
              let tmp56 = found;
              if (found.length > 0) {
                const items11 = [];
                items11[HermesBuiltin.arraySpread(items11, found, 0)] = found[0];
                tmp56 = items11;
              }
              const _Math = Math;
              bound = Math.max(memo, MIN_PRISM_GRADIENT_WIDTH);
              tmp32 = tmp56;
              items10 = items1;
              num5 = num6;
            }
          }
        }
      }
      const obj12 = { style: items12, color: defaultColor, children: userName };
      const Text4 = tmp8(5624).Text;
      const merged5 = Object.assign(merged);
      items12 = [merged.style, tmp11];
      return closure_9(Text4, obj12);
    }
  }
  const obj13 = { color: defaultColor, children: userName };
  const Text5 = tmp8(5624).Text;
  const merged6 = Object.assign(merged);
  return closure_9(Text5, obj13);
});
let result = size.fileFinishedImporting("modules/display_name_styles/native/UsernameWithEffects.tsx");

export default memoResult;
export const AVERAGE_FONT_WIDTH_RATIO = 0.6;
