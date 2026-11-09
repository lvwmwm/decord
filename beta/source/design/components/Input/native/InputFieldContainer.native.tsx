// Module ID: 7168
// Function ID: 7169
// Name: InputFieldContainer
// Dependencies: [19, 17, 21, 575, 5724, 5140, 7169, 5751, 1652, 5761, 2]
// Exports: InputFieldContainer

// Module 7168 (InputFieldContainer)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import useToken4 from "useToken" /* 5724 */;
import spring_spring from "spring/spring" /* 5761 */;
import InputTypes from "InputTypes" /* 7169 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let rect;

let Platform;
let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let tmp;
const Text_Text = tmp(5751);
function useInputStyles(size) {
  let INPUT_FIELD_RADIUS_LG;
  let INPUT_FIELD_TEXT_STYLE_LG;
  let str = size.size;
  if (str === undefined) {
    str = "lg";
  }
  let flag = size.round;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = size.disabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = size.grow;
  if (flag3 === undefined) {
    flag3 = true;
  }
  const useToken = useToken4.useToken;
  useToken4;
  if ("sm" === str) {
    INPUT_FIELD_RADIUS_LG = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_SM;
  } else if ("md" === str) {
    INPUT_FIELD_RADIUS_LG = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_MD;
  } else if ("lg" === str) {
    INPUT_FIELD_RADIUS_LG = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_LG;
  }
  let token = useToken(INPUT_FIELD_RADIUS_LG);
  const useToken2 = useToken4.useToken;
  useToken4;
  if (flag) {
    token = useToken2(nativeDefault.modules.mobile.INPUT_FIELD_ROUND_RADIUS);
  }
  const useToken3 = useToken4.useToken;
  useToken4;
  if ("sm" === str) {
    INPUT_FIELD_TEXT_STYLE_LG = tmp9(575).modules.mobile.INPUT_FIELD_TEXT_STYLE_SM;
  } else if ("md" === str) {
    INPUT_FIELD_TEXT_STYLE_LG = tmp9(575).modules.mobile.INPUT_FIELD_TEXT_STYLE_MD;
  } else if ("lg" === str) {
    INPUT_FIELD_TEXT_STYLE_LG = tmp9(575).modules.mobile.INPUT_FIELD_TEXT_STYLE_LG;
  }
  const token3 = useToken3(INPUT_FIELD_TEXT_STYLE_LG);
  const tmpResult4 = useToken4;
  return closure_9(str, flag2, flag3, token, token3, tmpResult4.useToken(nativeDefault.modules.mobile.INPUT_FIELD_PADDING_VERTICAL_SM_IOS));
}
({ Platform, StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = { mass: 0.5, damping: 15, stiffness: 200, overshootClamping: true };
let createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles(() => {
  let colors;
  let num3;
  let obj12;
  let obj13;
  let obj14;
  let obj15;
  let str3;
  let str = arg0;
  if (arg0 === undefined) {
    str = "lg";
  }
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = true;
  }
  let num = arg3;
  if (arg3 === undefined) {
    num = 12;
  }
  let str2 = arg4;
  if (arg4 === undefined) {
    str2 = "body-md/medium";
  }
  const obj = { sm: InputTypes.InputHeights.SM, md: InputTypes.InputHeights.MD, lg: InputTypes.InputHeights.LG };
  const tmp5 = { sm: nativeDefault.space.PX_8, md: nativeDefault.space.PX_12, lg: nativeDefault.space.PX_16 }[str];
  const tmp3 = obj[str];
  const tmp6 = { sm: nativeDefault.space.PX_4, md: nativeDefault.space.PX_8, lg: nativeDefault.space.PX_8 }[str];
  const obj4 = { sm: { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 }, md: { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8 }, lg: { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 + 2 } };
  ({ paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 });
  ({ paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8 });
  let num2 = 1;
  ({ paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 + 2 });
  if (flag) {
    num2 = 0.5;
  }
  const obj8 = { opacity: num2, pointerEvents: str3, flexDirection: "row", flexGrow: num3, alignItems: "center" };
  str3 = "auto";
  if (flag) {
    str3 = "none";
  }
  num3 = 0;
  if (flag2) {
    num3 = 1;
  }
  const obj9 = { container: obj8, background: { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.INPUT_FIELD_BORDER_WIDTH, borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT }, placeholderText: { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT }, minHeight: { minHeight: tmp3 }, radius: { borderRadius: num }, padding: obj4[str], text: obj12, leadingText: obj13, trailingText: obj14, leadingIcon: { position: "absolute", left: 0, top: 0, bottom: 0, paddingTop: tmp5, paddingBottom: tmp5, paddingStart: tmp5, paddingEnd: tmp6, justifyContent: "center", zIndex: 1, pointerEvents: "none" }, trailingIcon: { position: "absolute", right: 0, top: 0, bottom: 0, paddingTop: tmp5, paddingBottom: tmp5, paddingStart: tmp6, paddingEnd: tmp5, justifyContent: "center", zIndex: 1, pointerEvents: "none" }, splitBorder: obj15 };
  ({ backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.INPUT_FIELD_BORDER_WIDTH, borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT });
  obj12 = { lineHeight: undefined, color: flag ? colors.TEXT_MUTED : colors.TEXT_DEFAULT, flexGrow: 1 };
  ({ color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT });
  const merged = Object.assign(Text_Text.TextStyleSheet[str2]);
  colors = tmp4(575).colors;
  obj13 = { position: "absolute", left: 0, paddingEnd: tmp6, zIndex: 1, pointerEvents: "none" };
  const merged1 = Object.assign(tmp7);
  obj14 = { position: "absolute", right: 0, paddingStart: tmp6, zIndex: 1, pointerEvents: "none" };
  const merged2 = Object.assign(tmp7);
  obj15 = { borderRightWidth: 1, borderRightColor: nativeDefault.colors.BORDER_STRONG };
  const merged3 = Object.assign(tmp7);
  return obj9;
});
createStyles = createStyles_mod;
let obj = { error: nativeDefault.colors.INPUT_BORDER_ERROR_DEFAULT, default: "transparent", focused: nativeDefault.colors.INPUT_BORDER_ACTIVE };
let closure_10 = createStyles.createStyleProperties(obj);
let closure_11 = { code: "(function InputFieldContainerNativeTsx1(){let[status,ringColors,isFocused,withSpring,RING_SPRING_CONFIG]=this.__closure;let borderWidth=0;let borderColor='transparent';if(status!=='default'){borderWidth=2;borderColor=ringColors.error;}else if(isFocused){borderWidth=1;borderColor=ringColors.focused;}return{borderWidth:withSpring(borderWidth,RING_SPRING_CONFIG),borderColor:withSpring(borderColor,RING_SPRING_CONFIG),left:-borderWidth,right:-borderWidth,top:-borderWidth,bottom:-borderWidth};})" };
const result = size.fileFinishedImporting("design/components/Input/native/InputFieldContainer.native.tsx");

export { useInputStyles };
export function InputFieldContainer(isFocused) {
  let children;
  let grow;
  let items2;
  let items3;
  let items4;
  let leadingIcon;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp5;
  let tmp9;
  isFocused = isFocused.isFocused;
  let tmp2 = undefined !== isFocused;
  const tmp = closure_10();
  if (tmp2) {
    tmp2 = isFocused;
  }
  const status = isFocused.status;
  let str = "default";
  if (undefined !== status) {
    str = status;
  }
  const round = isFocused.round;
  let tmp3 = undefined !== round;
  ({ children, size, grow, leadingIcon } = isFocused);
  if (tmp3) {
    tmp3 = round;
  }
  const disabled = isFocused.disabled;
  const obj = { size, round: tmp3, disabled: tmp5, grow, hasLeadingIcon: null != leadingIcon };
  tmp5 = undefined !== disabled;
  const tmp4 = useInputStyles;
  if (tmp5) {
    tmp5 = disabled;
  }
  const tmp4Result = tmp4(obj);
  const items = [closure_11, str, tmp, tmp2, , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[4] = spring_spring.withSpring;
  items[5] = closure_7;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
  class InputFieldContainerNativeTsx1 {
    constructor() {
      if ("default" !== closure_0) {
        tmp3 = closure_1;
        str = closure_1.error;
        num = 2;
      } else {
        tmp = closure_2;
        str = "transparent";
        num = 0;
        if (closure_2) {
          tmp2 = closure_1;
          str = closure_1.focused;
          num = 1;
        }
      }
      rect = { borderWidth: closure_3(num, closure_4), borderColor: closure_3(str, closure_4), left: null, right: null, top: null, bottom: null };
      tmp4 = -num;
      rect.left = tmp4;
      rect.right = tmp4;
      rect.top = tmp4;
      rect.bottom = tmp4;
      return rect;
    }
  }
  const items1 = [tmp10, tmp11, tmp12, tmp13, tmp14];
  InputFieldContainerNativeTsx1.__closure = items1;
  InputFieldContainerNativeTsx1.__workletHash = 14166610550327;
  InputFieldContainerNativeTsx1.__initData = tmp9;
  const obj2 = { style: items2, children: items4 };
  items2 = [, , , ];
  ({ container: arr3[0], background: arr3[1], radius: arr3[2], minHeight: arr3[3] } = tmp4Result);
  const animatedStyle = useAnimatedStyle(InputFieldContainerNativeTsx1);
  const obj3 = { style: items3 };
  items3 = [_false.absoluteFill, tmp4Result.radius, animatedStyle];
  items4 = [hasOwnProperty(_modDef1652.View, obj3), children];
  return metroRequire(React3, obj2);
}
