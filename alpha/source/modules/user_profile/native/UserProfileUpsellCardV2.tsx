// Module ID: 14858
// Function ID: 14859
// Name: UserProfileUpsellCardV2
// Dependencies: [19, 17, 7145, 21, 5091, 587, 558, 576, 5087, 9016, 5376, 5388, 1105, 2]

// Module 14858 (UserProfileUpsellCardV2)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import Text_Text from "Text/Text" /* 5087 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import LinearGradientDefault from "LinearGradient" /* 5388 */;
import ColorConstants from "ColorConstants" /* 7145 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const Gradients = ColorConstants.Gradients;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { outer: obj2, inner: obj3, text: obj4, textCenter: { textAlign: "center" } };
obj2 = { borderRadius: nativeDefault.radii.lg, padding: 1 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.lg - 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_12 };
let closure_7 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileUpsellCardV2(arg0) {
  let buttonText;
  let buttonVariant;
  let children;
  let disabled;
  let innerStyle;
  let items;
  let loading;
  let onButtonPress;
  let onLayout;
  let style;
  let text;
  let textAlign;
  const obj = react2;
  const cResult = obj.c(28);
  ({ text, textAlign, buttonText, onButtonPress, buttonVariant, disabled, loading, children, style, innerStyle, onLayout } = arg0);
  let str = "left";
  if (undefined !== textAlign) {
    str = textAlign;
  }
  let str2 = "primary";
  if (undefined !== buttonVariant) {
    str2 = buttonVariant;
  }
  let tmp4 = undefined !== disabled && disabled;
  const tmp6 = closure_7();
  if (cResult[0] === style) {
    let tmp7;
    if (cResult[1] === tmp6.outer) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === innerStyle) {
      let tmp8;
      if (cResult[4] === tmp6.inner) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === tmp6.text) {
        let tmp10;
        if (cResult[7] === ("center" === str && tmp6.textCenter)) {
          tmp10 = cResult[8];
        }
        if (cResult[9] === tmp10) {
          let tmp11;
          let tmp15;
          if (cResult[10] === text) {
            tmp11 = cResult[11];
          }
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { color: nativeDefault.colors.WHITE, size: "xs" };
            const NitroWheelIcon = tmp(9016).NitroWheelIcon;
            const tmp18 = hasOwnProperty(NitroWheelIcon, obj2);
            cResult[12] = tmp18;
            tmp15 = tmp18;
          } else {
            tmp15 = cResult[12];
          }
          if (!tmp4) {
            tmp4 = tmp5;
          }
          if (cResult[13] === buttonText) {
            if (cResult[14] === str2) {
              if (cResult[15] === (undefined !== loading && loading)) {
                if (cResult[16] === onButtonPress) {
                  let tmp19;
                  if (cResult[17] === tmp4) {
                    tmp19 = cResult[18];
                  }
                  if (cResult[19] === children) {
                    if (cResult[20] === tmp19) {
                      if (cResult[21] === tmp8) {
                        let tmp22;
                        if (cResult[22] === tmp11) {
                          tmp22 = cResult[23];
                        }
                        if (cResult[24] === onLayout) {
                          if (cResult[25] === tmp22) {
                            let tmp26;
                            if (cResult[26] === tmp7) {
                              tmp26 = cResult[27];
                            }
                            return tmp26;
                          }
                        }
                        const obj3 = { start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: Gradients.PREMIUM_TIER_2, style: tmp7, onLayout, children: tmp22 };
                        const tmp29 = LinearGradientDefault;
                        const tmp31 = hasOwnProperty(tmp29, obj3);
                        cResult[24] = onLayout;
                        cResult[25] = tmp22;
                        cResult[26] = tmp7;
                        cResult[27] = tmp31;
                        tmp26 = tmp31;
                      }
                    }
                  }
                  const obj4 = { style: tmp8, children: items };
                  items = [tmp11, tmp19, children];
                  const tmp25 = metroRequire(View, obj4);
                  cResult[19] = children;
                  cResult[20] = tmp19;
                  cResult[21] = tmp8;
                  cResult[22] = tmp11;
                  cResult[23] = tmp25;
                  tmp22 = tmp25;
                }
              }
            }
          }
          const obj5 = { icon: tmp15, text: buttonText, onPress: onButtonPress, variant: str2, loading: undefined !== loading && loading, disabled: tmp4, grow: true };
          const tmp21 = hasOwnProperty(components_Button_Button.Button, obj5);
          cResult[13] = buttonText;
          cResult[14] = str2;
          cResult[15] = undefined !== loading && loading;
          cResult[16] = onButtonPress;
          cResult[17] = tmp4;
          cResult[18] = tmp21;
          tmp19 = tmp21;
        }
        const obj6 = { style: tmp10, variant: "text-md/normal", color: "text-default", maxFontSizeMultiplier: 2.5, children: text };
        const tmp13 = hasOwnProperty(Text_Text.Text, obj6);
        cResult[9] = tmp10;
        cResult[10] = text;
        cResult[11] = tmp13;
        tmp11 = tmp13;
      }
      const items1 = [tmp6.text, "center" === str && tmp6.textCenter];
      cResult[6] = tmp6.text;
      cResult[7] = "center" === str && tmp6.textCenter;
      cResult[8] = items1;
      tmp10 = items1;
    }
    const items2 = [tmp6.inner, innerStyle];
    cResult[3] = innerStyle;
    cResult[4] = tmp6.inner;
    cResult[5] = items2;
    tmp8 = items2;
  }
  const items3 = [tmp6.outer, style];
  cResult[0] = style;
  cResult[1] = tmp6.outer;
  cResult[2] = items3;
  tmp7 = items3;
}) : (function UserProfileUpsellCardV2(textAlign) {
  let NitroWheelIcon;
  let buttonText;
  let buttonVariant;
  let children;
  let innerStyle;
  let items;
  let items1;
  let items3;
  let obj2;
  let obj4;
  let onButtonPress;
  let onLayout;
  let style;
  let tmp7;
  let tmp8;
  let str = textAlign.textAlign;
  const text = textAlign.text;
  if (str === undefined) {
    str = "left";
  }
  ({ buttonVariant, buttonText, onButtonPress } = textAlign);
  if (buttonVariant === undefined) {
    buttonVariant = "primary";
  }
  let flag = textAlign.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = textAlign.loading;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ children, style, innerStyle, onLayout } = textAlign);
  const tmp = closure_7();
  const obj = { start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: Gradients.PREMIUM_TIER_2, style: items, onLayout, children: tmp7(tmp8, obj2) };
  items = [tmp.outer, style];
  obj2 = { style: items1, children: items3 };
  items1 = [tmp.inner, innerStyle];
  const items2 = [tmp.text, ];
  let textCenter = "center" === str;
  const tmp5 = LinearGradientDefault;
  const Text = Text_Text.Text;
  tmp7 = metroRequire;
  tmp8 = View;
  if (textCenter) {
    textCenter = tmp.textCenter;
  }
  items2[1] = textCenter;
  items3 = [hasOwnProperty(Text, { style: items2, variant: "text-md/normal", color: "text-default", maxFontSizeMultiplier: 2.5, children: text }), , ];
  const obj3 = { icon: hasOwnProperty(NitroWheelIcon, obj4), text: buttonText, onPress: onButtonPress, variant: buttonVariant, loading: flag2, disabled: flag, grow: true };
  const Button = tmp6(5376).Button;
  obj4 = { color: nativeDefault.colors.WHITE, size: "xs" };
  NitroWheelIcon = tmp6(9016).NitroWheelIcon;
  if (!flag) {
    flag = flag2;
  }
  items3[1] = hasOwnProperty(Button, obj3);
  items3[2] = children;
  return hasOwnProperty(tmp5, obj);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileUpsellCardV2.tsx");

export default tmp5;
export const GRADIENT_BORDER_WIDTH = 1;
