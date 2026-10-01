// Module ID: 6039
// Function ID: 6040
// Name: InputFieldContainer
// Dependencies: [19, 17, 21, 576, 4531, 4836, 6040, 4832, 4566, 5280, 2]
// Exports: InputFieldContainer

// Module 6039 (InputFieldContainer)
import nativeDefault from "native" /* 576 */;
import useToken4 from "useToken" /* 4531 */;
import spring from "spring" /* 5280 */;
import InputTypes from "InputTypes" /* 6040 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let Platform;
let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let tmp;
const Text_Text = tmp(4832);
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
    INPUT_FIELD_TEXT_STYLE_LG = tmp9(576).modules.mobile.INPUT_FIELD_TEXT_STYLE_SM;
  } else if ("md" === str) {
    INPUT_FIELD_TEXT_STYLE_LG = tmp9(576).modules.mobile.INPUT_FIELD_TEXT_STYLE_MD;
  } else if ("lg" === str) {
    INPUT_FIELD_TEXT_STYLE_LG = tmp9(576).modules.mobile.INPUT_FIELD_TEXT_STYLE_LG;
  }
  const token3 = useToken3(INPUT_FIELD_TEXT_STYLE_LG);
  const tmpResult4 = useToken4;
  return closure_9(str, flag2, flag3, token, token3, tmpResult4.useToken(nativeDefault.modules.mobile.INPUT_FIELD_PADDING_VERTICAL_SM_IOS));
}
({ Platform, StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const RING_SPRING_CONFIG = { mass: 0.5, damping: 15, stiffness: 200, overshootClamping: true };
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
    str2 = "text-md/medium";
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
  colors = tmp4(576).colors;
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
const __initData = { code: "function InputFieldContainerNativeTsx1(){const{status,ringColors,isFocused,withSpring,RING_SPRING_CONFIG}=this.__closure;let borderWidth=0;let borderColor='transparent';if(status!=='default'){borderWidth=2;borderColor=ringColors.error;}else if(isFocused){borderWidth=1;borderColor=ringColors.focused;}return{borderWidth:withSpring(borderWidth,RING_SPRING_CONFIG),borderColor:withSpring(borderColor,RING_SPRING_CONFIG),left:-borderWidth,right:-borderWidth,top:-borderWidth,bottom:-borderWidth};}" };
const result = size.fileFinishedImporting("design/components/Input/native/InputFieldContainer.native.tsx");

export { useInputStyles };
export const InputFieldContainer = function InputFieldContainer(isFocused) {
  let children;
  let closure_0;
  let closure_1;
  let grow;
  let items;
  let items1;
  let items2;
  let leadingIcon;
  let tmp5;
  const tmp = closure_10();
  _require = tmp;
  isFocused = isFocused.isFocused;
  importDefault = tmp2;
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
  let obj2 = require("ReanimatedRexport");
  const fn = function s() {
    let num;
    let obj2;
    let obj3;
    if ("default" !== str) {
      str = closure_0.error;
      num = 2;
    } else {
      str = "transparent";
      num = 0;
      if (closure_1) {
        str = closure_0.focused;
        num = 1;
      }
    }
    const rect = { borderWidth: obj2.withSpring(num, RING_SPRING_CONFIG), borderColor: obj3.withSpring(str, RING_SPRING_CONFIG), left: -num, right: -num, top: -num, bottom: -num };
    obj2 = spring;
    obj3 = spring;
    return rect;
  };
  let obj3 = { status: str, ringColors: tmp, isFocused: tmp2, withSpring: require("spring").withSpring, RING_SPRING_CONFIG };
  fn.__closure = obj3;
  fn.__workletHash = 1037178877006;
  fn.__initData = __initData;
  const obj4 = { style: items, children: items2 };
  items = [, , , ];
  ({ container: arr[0], background: arr[1], radius: arr[2], minHeight: arr[3] } = tmp4Result);
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj5 = { style: items1 };
  items1 = [absoluteFill.absoluteFill, tmp4Result.radius, animatedStyle];
  items2 = [closure_5(require("ReanimatedRexport").View, obj5), children];
  return closure_6(closure_4, obj4);
};
