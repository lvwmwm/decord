// Module ID: 4533
// Function ID: 39812
// Name: getIOSBlurEffect
// Dependencies: [31, 27, 4534, 33, 477, 4535, 3834, 689, 4538, 3974, 2]

// Module 4533 (getIOSBlurEffect)
import { View } from "get ActivityIndicator";
import { useVisualEffectViewOverrides as closure_4 } from "useVisualEffectViewOverrides";
import { jsx } from "jsxProd";
import set from "set";
import importAllResult from "result";
import set from "useVisualEffectViewOverrides";

const require = arg1;
function getIOSBlurEffect(blurTheme, blurStyle) {
  if (require(4535) /* BLUR_EFFECT_NAMES */.MODERN_IOS_BLURS_EFFECTS_AVAILABLE) {
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
  let tmp2 = set;
  if (set) {
    let tmp4 = null == tmp;
    if (!tmp4) {
      if (android_softwareBlurDisabled) {
        android_softwareBlurDisabled = !require(4538) /* MODERN_ANDROID_BLURRING_AVAILABLE */.MODERN_ANDROID_BLURRING_AVAILABLE;
      }
      tmp4 = true === android_softwareBlurDisabled;
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
set = set.isAndroid();
const result = set.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectView.tsx");

export default require("result").forwardRef(function VisualEffectView(blurAmount, ref) {
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
  let obj = { blurTheme: 0, blurStyle: 0, blurAmount: 0, blurTintRgba: 0, android_fallbackColor: 0, android_blurTargetViewNativeId: 0, android_softwareBlurDisabled: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(blurAmount, obj);
  ({ blurAmountOverride, blurTintRgbaOverride, blurEffectNameOverride } = callback());
  obj = { blurTheme, blurStyle, style: merged.style, android_fallbackColor };
  ({ blurTheme: blurTheme2, android_fallbackColor: android_fallbackColor2 } = obj);
  ({ style, blurStyle: blurStyle2 } = obj);
  let obj2 = require(3834) /* map */;
  const token = obj2.useToken(importDefault(689).colors.LEGACY_BLUR_FALLBACK_DEFAULT, blurTheme2);
  let obj3 = require(3834) /* map */;
  let token1 = obj3.useToken(importDefault(689).colors.LEGACY_BLUR_FALLBACK_ULTRA_THIN, blurTheme2);
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
  const token2 = require(3834) /* map */.useToken(importDefault(689).colors.LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT, blurTheme);
  require(3834) /* map */;
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
    let tmp12Result = <View ref={arg1} />;
  } else if (set) {
    const obj4 = { ref };
    let tmp13Result = tmp13(4538);
    if (null == blurAmountOverride) {
      blurAmountOverride = getAndroidBlurAmount(blurTheme, num);
    }
    obj4.blurAmount = blurAmountOverride;
    obj4.blurTintIOSParityCompensationRgba = require(3974) /* hexToRgb */.hexToRgbaString(tmp10);
    if (null != blurTintRgbaOverride) {
      blurTintRgba = blurTintRgbaOverride;
    }
    obj4.blurTintRgba = blurTintRgba;
    obj4.blurTargetViewNativeId = android_blurTargetViewNativeId;
    const merged2 = Object.assign(merged);
    tmp12Result = tmp12(tmp13Result, obj4);
    const obj11 = require(3974) /* hexToRgb */;
  } else {
    const obj5 = { ref };
    tmp13Result = tmp13(4535);
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
export { isBlurDisabled };
