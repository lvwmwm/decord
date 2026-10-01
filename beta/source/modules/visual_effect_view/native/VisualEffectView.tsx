// Module ID: 5269
// Function ID: 5270
// Name: VisualEffectView
// Dependencies: [19, 17, 5270, 1074, 21, 1364, 5271, 4531, 576, 5274, 2]
// Exports: isBlurDisabled, isBlurThemeLight, normalizeBlurTheme

// Module 5269 (VisualEffectView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import useToken from "useToken" /* 4531 */;
import VEVOOStore from "VEVOOStore" /* 5270 */;
import VisualEffectViewIOS from "VisualEffectViewIOS" /* 5271 */;
import VisualEffectViewAndroid from "VisualEffectViewAndroid" /* 5274 */;
import react from "react" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

const VisualEffectViewIOSDefault = VisualEffectViewIOS;
const VisualEffectViewAndroidDefault = VisualEffectViewAndroid;

const View = react_native.View;
let closure_4 = VEVOOStore.useVisualEffectViewOverrides;
const ThemeTypes = Constants.ThemeTypes;
const jsx = Fragment.jsx;
let closure_7 = PlatformUtils.isAndroid();
const forwardRefResult = react.forwardRef(function VisualEffectView(blurAmount, ref) {
  let DARK;
  let DARK2;
  let android_blurTargetViewNativeId;
  let android_fallbackColor;
  let android_softwareBlurDisabled;
  let blurAmountOverride;
  let blurEffectNameOverride;
  let blurStyle;
  let blurTheme;
  let tintColor;
  let tintColorOverride;
  let tmp19Result;
  let tmp27;
  let tmp28;
  ({ blurTheme, blurStyle } = blurAmount);
  if (blurStyle === undefined) {
    blurStyle = "default";
  }
  let num = blurAmount.blurAmount;
  if (num === undefined) {
    num = 1;
  }
  ({ tintColor, android_fallbackColor, android_blurTargetViewNativeId, android_softwareBlurDisabled } = blurAmount);
  if (android_softwareBlurDisabled === undefined) {
    android_softwareBlurDisabled = false;
  }
  const merged = Object.assign(blurAmount, Object.assign({ blurTheme: 0, blurStyle: 0, blurAmount: 0, tintColor: 0, android_fallbackColor: 0, android_blurTargetViewNativeId: 0, android_softwareBlurDisabled: 0 }));
  const style = merged.style;
  ({ blurAmountOverride, tintColorOverride, blurEffectNameOverride } = closure_4());
  closure_4();
  if ("light" === blurTheme) {
    DARK = ThemeTypes.LIGHT;
  } else {
    DARK = blurTheme;
    if ("dark" === blurTheme) {
      DARK = ThemeTypes.DARK;
    }
  }
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.LEGACY_BLUR_FALLBACK_DEFAULT, DARK);
  const obj2 = useToken;
  let token1 = obj2.useToken(nativeDefault.colors.LEGACY_BLUR_FALLBACK_ULTRA_THIN, DARK);
  if ("default" === blurStyle) {
    token1 = token;
  }
  const items = [{ backgroundColor: token1 }, style, ];
  let tmp11;
  if (null != android_fallbackColor) {
    tmp11 = { backgroundColor: android_fallbackColor };
    const obj3 = { backgroundColor: android_fallbackColor };
  }
  items[2] = tmp11;
  if ("light" === blurTheme) {
    DARK2 = ThemeTypes.LIGHT;
  } else {
    DARK2 = blurTheme;
    if ("dark" === blurTheme) {
      DARK2 = ThemeTypes.DARK;
    }
  }
  const tmp6Result = useToken;
  const token2 = tmp6Result.useToken(tmp8(576).colors.LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT, DARK2);
  const tmp6Result2 = useToken;
  let token3 = tmp6Result2.useToken(tmp8(576).colors.LEGACY_ANDROID_BLUR_OVERLAY_ULTRA_THIN, DARK2);
  if ("default" === blurStyle) {
    token3 = token2;
  }
  let tmp17 = closure_7;
  if (tmp17) {
    let tmp18 = null == android_blurTargetViewNativeId;
    if (!tmp18) {
      if (android_softwareBlurDisabled) {
        android_softwareBlurDisabled = !tmp6(5274).MODERN_ANDROID_BLURRING_AVAILABLE;
      }
      tmp18 = true === android_softwareBlurDisabled;
    }
    tmp17 = tmp18;
  }
  if (tmp17) {
    const obj4 = { ref, style: items };
    const merged1 = Object.assign(merged);
    tmp19Result = tmp19(View, obj4);
  } else if (closure_7) {
    const obj5 = { ref, blurAmount: blurAmountOverride, blurTintIOSParityCompensationColor: token3, tintColor: tintColorOverride, blurTargetViewNativeId: android_blurTargetViewNativeId };
    const tmp8Result = VisualEffectViewAndroidDefault;
    if (blurAmountOverride == null) {
      if (null == num) {
        if ("light" === blurTheme) {
          blurTheme = ThemeTypes.LIGHT;
        } else if ("dark" === blurTheme) {
          blurTheme = ThemeTypes.DARK;
        }
        let num2 = 1;
        if (blurTheme === ThemeTypes.LIGHT) {
          num2 = 0.85;
        }
        num = num2;
      }
      blurAmountOverride = num;
    }
    if (tintColorOverride == null) {
      tintColorOverride = tintColor;
    }
    const merged2 = Object.assign(merged);
    tmp19Result = tmp19(tmp8Result, obj5);
  } else {
    const obj6 = { ref, blurEffectName: blurEffectNameOverride, blurAmount: tmp27, tintColor: tmp28 };
    const tmp8Result2 = VisualEffectViewIOSDefault;
    if (blurEffectNameOverride == null) {
      let DARK3;
      let str5;
      if (VisualEffectViewIOS.MODERN_IOS_BLURS_EFFECTS_AVAILABLE) {
        if ("default" !== blurStyle) {
          let DARK4;
          if ("light" === blurTheme) {
            DARK4 = ThemeTypes.LIGHT;
          } else {
            DARK4 = blurTheme;
            if ("dark" === blurTheme) {
              DARK4 = ThemeTypes.DARK;
            }
          }
          let str7 = "UIBlurEffectStyleSystemUltraThinMaterialDark";
          if (DARK4 === ThemeTypes.LIGHT) {
            str7 = "UIBlurEffectStyleSystemUltraThinMaterialLight";
          }
          str5 = str7;
        }
        blurEffectNameOverride = str5;
      }
      if ("light" === blurTheme) {
        DARK3 = ThemeTypes.LIGHT;
      } else {
        DARK3 = blurTheme;
        if ("dark" === blurTheme) {
          DARK3 = ThemeTypes.DARK;
        }
      }
      str5 = "UIBlurEffectStyleDark";
      if (DARK3 === ThemeTypes.LIGHT) {
        str5 = "UIBlurEffectStyleLight";
      }
    }
    tmp27 = blurAmountOverride;
    if (blurAmountOverride == null) {
      tmp27 = num;
    }
    tmp28 = tintColorOverride;
    if (tintColorOverride == null) {
      tmp28 = tintColor;
    }
    const merged3 = Object.assign(merged);
    tmp19Result = tmp19(tmp8Result2, obj6);
  }
  return tmp19Result;
});
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectView.tsx");

export default forwardRefResult;
export const normalizeBlurTheme = function normalizeBlurTheme(blurTheme) {
  let DARK = blurTheme;
  if ("light" === blurTheme) {
    DARK = ThemeTypes.LIGHT;
  } else if ("dark" === DARK) {
    DARK = ThemeTypes.DARK;
  }
  return DARK;
};
export const isBlurThemeLight = function isBlurThemeLight(blurTheme) {
  let DARK = blurTheme;
  if ("light" === blurTheme) {
    DARK = ThemeTypes.LIGHT;
  } else if ("dark" === DARK) {
    DARK = ThemeTypes.DARK;
  }
  return DARK === ThemeTypes.LIGHT;
};
export const isBlurDisabled = function isBlurDisabled(merged) {
  let android_softwareBlurDisabled = merged.android_softwareBlurDisabled;
  let tmp2 = closure_7;
  if (tmp2) {
    let tmp4 = null == tmp;
    if (!tmp4) {
      if (android_softwareBlurDisabled) {
        android_softwareBlurDisabled = !VisualEffectViewAndroid.MODERN_ANDROID_BLURRING_AVAILABLE;
      }
      tmp4 = true === android_softwareBlurDisabled;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};
