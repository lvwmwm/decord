// Module ID: 4529
// Function ID: 39763
// Name: getIOSBlurEffect
// Dependencies: []

// Module 4529 (getIOSBlurEffect)
function getIOSBlurEffect(blurTheme, blurStyle) {
  if (blurStyle(dependencyMap[5]).MODERN_IOS_BLURS_EFFECTS_AVAILABLE) {
    if ("default" !== blurStyle) {
      let str3 = "UIBlurEffectStyleSystemUltraThinMaterialDark";
      if ("light" === blurTheme) {
        str3 = "UIBlurEffectStyleSystemUltraThinMaterialLight";
      }
      let str2 = str3;
    }
    return str2;
  }
  str2 = "UIBlurEffectStyleDark";
  if ("light" === blurTheme) {
    str2 = "UIBlurEffectStyleLight";
  }
}
function getAndroidBlurAmount(blurTheme, blurAmount) {
  let tmp = blurAmount;
  if (null == blurAmount) {
    let num = 1;
    if ("light" === blurTheme) {
      num = 0.85;
    }
    tmp = num;
  }
  return tmp;
}
function isBlurDisabled(merged) {
  let android_softwareBlurDisabled = merged.android_softwareBlurDisabled;
  let tmp2 = closure_6;
  if (closure_6) {
    let tmp4 = null == tmp;
    if (!tmp4) {
      if (android_softwareBlurDisabled) {
        android_softwareBlurDisabled = !arg1(dependencyMap[8]).MODERN_ANDROID_BLURRING_AVAILABLE;
      }
      tmp4 = true === android_softwareBlurDisabled;
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
const View = arg1(dependencyMap[1]).View;
let closure_4 = arg1(dependencyMap[2]).useVisualEffectViewOverrides;
const jsx = arg1(dependencyMap[3]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_6 = arg1(dependencyMap[4]).isAndroid();
const obj2 = arg1(dependencyMap[4]);
const forwardRefResult = importAllResult.forwardRef(function VisualEffectView(blurAmount, ref) {
  let android_blurTargetViewNativeId;
  let android_fallbackColor;
  let android_fallbackColor2;
  let android_softwareBlurDisabled;
  let blurAmountOverride;
  let blurEffectNameOverride;
  let blurStyle;
  let blurStyle2;
  let blurTheme;
  let blurTheme2;
  let blurTintRgba;
  let blurTintRgbaOverride;
  let style;
  ({ blurTheme, blurStyle } = blurAmount);
  if (blurStyle === undefined) {
    blurStyle = "default";
  }
  let num = blurAmount.blurAmount;
  if (num === undefined) {
    num = 1;
  }
  ({ blurTintRgba, android_blurTargetViewNativeId, android_softwareBlurDisabled, android_fallbackColor } = blurAmount);
  if (android_softwareBlurDisabled === undefined) {
    android_softwareBlurDisabled = false;
  }
  let obj = { height: null, paddingHorizontal: null, borderRadius: null, backgroundColor: null, justifyContent: null, alignItems: null, "Bool(false)": null };
  Object.setPrototypeOf(null);
  const merged = Object.assign(blurAmount, obj);
  ({ blurAmountOverride, blurTintRgbaOverride, blurEffectNameOverride } = callback());
  obj = { blurTheme, blurStyle, style: merged.style, android_fallbackColor };
  ({ blurTheme: blurTheme2, android_fallbackColor: android_fallbackColor2 } = obj);
  ({ style, blurStyle: blurStyle2 } = obj);
  let obj2 = ref(dependencyMap[6]);
  const token = obj2.useToken(importDefault(dependencyMap[7]).colors.LEGACY_BLUR_FALLBACK_DEFAULT, blurTheme2);
  let obj3 = ref(dependencyMap[6]);
  let token1 = obj3.useToken(importDefault(dependencyMap[7]).colors.LEGACY_BLUR_FALLBACK_ULTRA_THIN, blurTheme2);
  obj = {};
  if ("default" === blurStyle2) {
    token1 = token;
  }
  obj.backgroundColor = token1;
  const items = [obj, style, ];
  let tmp6;
  if (null != android_fallbackColor2) {
    const obj1 = { backgroundColor: android_fallbackColor2 };
    tmp6 = obj1;
  }
  items[2] = tmp6;
  const tmp3 = callback();
  const token2 = ref(dependencyMap[6]).useToken(importDefault(dependencyMap[7]).colors.LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT, blurTheme);
  ref(dependencyMap[6]);
  if ("default" === blurStyle) {
    let tmp10 = token2;
  } else {
    tmp10 = tmp9;
  }
  obj2 = { android_softwareBlurDisabled, android_blurTargetViewNativeId };
  if (isBlurDisabled(obj2)) {
    obj3 = { ref };
    const merged1 = Object.assign(merged);
    obj3["style"] = items;
    let tmp12Result = <View {...obj3} />;
  } else if (closure_6) {
    const obj4 = { ref };
    let tmp13Result = tmp13(tmp14[8]);
    if (null == blurAmountOverride) {
      blurAmountOverride = getAndroidBlurAmount(blurTheme, num);
    }
    obj4.blurAmount = blurAmountOverride;
    obj4.blurTintIOSParityCompensationRgba = ref(dependencyMap[9]).hexToRgbaString(tmp10);
    if (null != blurTintRgbaOverride) {
      blurTintRgba = blurTintRgbaOverride;
    }
    obj4.blurTintRgba = blurTintRgba;
    obj4.blurTargetViewNativeId = android_blurTargetViewNativeId;
    const merged2 = Object.assign(merged);
    tmp12Result = tmp12(tmp13Result, obj4);
    const obj11 = ref(dependencyMap[9]);
  } else {
    const obj5 = { ref };
    tmp13Result = tmp13(tmp14[5]);
    if (null == blurEffectNameOverride) {
      blurEffectNameOverride = getIOSBlurEffect(blurTheme, blurStyle);
    }
    obj5.blurEffectName = blurEffectNameOverride;
    let tmp17 = num;
    if (null != blurAmountOverride) {
      tmp17 = blurAmountOverride;
    }
    obj5.blurAmount = tmp17;
    let tmp18 = blurTintRgba;
    if (null != blurTintRgbaOverride) {
      tmp18 = blurTintRgbaOverride;
    }
    obj5.blurTintRgba = tmp18;
    const merged3 = Object.assign(merged);
    tmp12Result = tmp12(tmp13Result, obj5);
  }
  return tmp12Result;
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/visual_effect_view/native/VisualEffectView.tsx");

export default forwardRefResult;
export { isBlurDisabled };
