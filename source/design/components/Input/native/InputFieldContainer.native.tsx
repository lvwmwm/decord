// Module ID: 5780
// Function ID: 49476
// Name: useInputStyles
// Dependencies: [31, 27, 33, 689, 3834, 4130, 5781, 4126, 3991, 4542, 2]
// Exports: InputFieldContainer

// Module 5780 (useInputStyles)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let Platform;
let closure_3;
let closure_4;
let closure_5;
let closure_6;
let require = arg1;
function useInputStyles(size) {
  let str = size.size;
  if (str === undefined) {
    str = "lg";
  }
  let flag = size.isRound;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = size.isDisabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = size.grow;
  if (flag3 === undefined) {
    flag3 = true;
  }
  if ("sm" === str) {
    let INPUT_FIELD_RADIUS_LG = importDefault(689).modules.mobile.INPUT_FIELD_RADIUS_SM;
  } else if ("md" === str) {
    INPUT_FIELD_RADIUS_LG = importDefault(689).modules.mobile.INPUT_FIELD_RADIUS_MD;
  } else if ("lg" === str) {
    INPUT_FIELD_RADIUS_LG = importDefault(689).modules.mobile.INPUT_FIELD_RADIUS_LG;
  }
  let token = require(3834) /* map */.useToken(INPUT_FIELD_RADIUS_LG);
  const obj = require(3834) /* map */;
  const tmp = require;
  if (flag) {
    token = tmpResult.useToken(importDefault(689).modules.mobile.INPUT_FIELD_ROUND_RADIUS);
  }
  const tmp10 = require;
  tmpResult = require(3834) /* map */;
  if ("sm" === str) {
    let INPUT_FIELD_TEXT_STYLE_LG = importDefault(689).modules.mobile.INPUT_FIELD_TEXT_STYLE_SM;
  } else if ("md" === str) {
    INPUT_FIELD_TEXT_STYLE_LG = importDefault(689).modules.mobile.INPUT_FIELD_TEXT_STYLE_MD;
  } else if ("lg" === str) {
    INPUT_FIELD_TEXT_STYLE_LG = importDefault(689).modules.mobile.INPUT_FIELD_TEXT_STYLE_LG;
  }
  const token1 = require(3834) /* map */.useToken(INPUT_FIELD_TEXT_STYLE_LG);
  const obj3 = require(3834) /* map */;
  return callback3(str, flag2, flag3, token, token1, tmp10(3834).useToken(importDefault(689).modules.mobile.INPUT_FIELD_PADDING_VERTICAL_SM_IOS));
}
({ Platform, StyleSheet: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = { mass: 0.5, damping: 15, stiffness: 200, overshootClamping: true };
let closure_8 = _createForOfIteratorHelperLoose.createStyles(() => {
  let str = arg0;
  let flag = arg1;
  let flag2 = arg2;
  let num = arg3;
  let str2 = arg4;
  if (arg0 === undefined) {
    str = "lg";
  }
  if (flag === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = true;
  }
  if (num === undefined) {
    num = 12;
  }
  if (str2 === undefined) {
    str2 = "text-md/medium";
  }
  let obj = { sm: require(5781) /* InputHeights */.InputHeights.SM, md: require(5781) /* InputHeights */.InputHeights.MD, lg: require(5781) /* InputHeights */.InputHeights.LG };
  obj = { sm: importDefault(689).space.PX_8, md: importDefault(689).space.PX_12, lg: importDefault(689).space.PX_16 };
  obj = { sm: importDefault(689).space.PX_4, md: importDefault(689).space.PX_8, lg: importDefault(689).space.PX_8 };
  const obj1 = { sm: { paddingHorizontal: importDefault(689).space.PX_8, paddingVertical: importDefault(689).space.PX_4 } };
  const obj2 = { paddingHorizontal: importDefault(689).space.PX_8, paddingVertical: importDefault(689).space.PX_4 };
  obj1.md = { paddingHorizontal: importDefault(689).space.PX_12, paddingVertical: importDefault(689).space.PX_8 };
  const obj3 = { paddingHorizontal: importDefault(689).space.PX_12, paddingVertical: importDefault(689).space.PX_8 };
  obj1.lg = { paddingHorizontal: importDefault(689).space.PX_16, paddingVertical: importDefault(689).space.PX_8 + 2 };
  const obj5 = {};
  const obj6 = {};
  let num2 = 1;
  if (flag) {
    num2 = 0.5;
  }
  obj6.opacity = num2;
  let str3 = "auto";
  if (flag) {
    str3 = "none";
  }
  obj6.pointerEvents = str3;
  obj6.flexDirection = "row";
  let num3 = 0;
  if (flag2) {
    num3 = 1;
  }
  obj6.flexGrow = num3;
  obj6.alignItems = "center";
  obj5.container = obj6;
  const obj4 = { paddingHorizontal: importDefault(689).space.PX_16, paddingVertical: importDefault(689).space.PX_8 + 2 };
  obj5.background = { backgroundColor: importDefault(689).colors.INPUT_BACKGROUND_DEFAULT, borderWidth: importDefault(689).modules.mobile.INPUT_FIELD_BORDER_WIDTH, borderColor: importDefault(689).colors.INPUT_BORDER_DEFAULT };
  const obj7 = { backgroundColor: importDefault(689).colors.INPUT_BACKGROUND_DEFAULT, borderWidth: importDefault(689).modules.mobile.INPUT_FIELD_BORDER_WIDTH, borderColor: importDefault(689).colors.INPUT_BORDER_DEFAULT };
  obj5.placeholderText = { color: importDefault(689).colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
  obj5.minHeight = { minHeight: obj[str] };
  const obj9 = { borderRadius: num };
  obj5.radius = obj9;
  obj5.padding = obj1[str];
  const obj10 = {};
  const merged = Object.assign(require(4126) /* Text */.TextStyleSheet[str2]);
  obj10["lineHeight"] = undefined;
  const colors = importDefault(689).colors;
  obj10["color"] = flag ? colors.TEXT_MUTED : colors.TEXT_DEFAULT;
  obj10["flexGrow"] = 1;
  obj5.text = obj10;
  const obj11 = { position: "absolute", left: 0 };
  const merged1 = Object.assign(tmp3);
  obj11["paddingEnd"] = obj[str];
  obj11["zIndex"] = 1;
  obj11["pointerEvents"] = "none";
  obj5.leadingText = obj11;
  const obj12 = { position: "absolute", right: 0 };
  const merged2 = Object.assign(tmp3);
  obj12["paddingStart"] = obj[str];
  obj12["zIndex"] = 1;
  obj12["pointerEvents"] = "none";
  obj5.trailingText = obj12;
  const obj13 = { position: "absolute", left: 0, top: 0, bottom: 0, paddingTop: obj[str], paddingBottom: obj[str], paddingStart: obj[str], paddingEnd: obj[str], justifyContent: "center", zIndex: 1, pointerEvents: "none" };
  obj5.leadingIcon = obj13;
  const obj14 = { position: "absolute", right: 0, top: 0, bottom: 0, paddingTop: obj[str], paddingBottom: obj[str], paddingStart: obj[str], paddingEnd: obj[str], justifyContent: "center", zIndex: 1, pointerEvents: "none" };
  obj5.trailingIcon = obj14;
  const obj15 = {};
  const merged3 = Object.assign(tmp3);
  obj15["borderRightWidth"] = 1;
  obj15["borderRightColor"] = importDefault(689).colors.BORDER_STRONG;
  obj5.splitBorder = obj15;
  return obj5;
});
_createForOfIteratorHelperLoose = { error: require("_createForOfIteratorHelperLoose").colors.INPUT_BORDER_ERROR_DEFAULT, default: "transparent", focused: require("_createForOfIteratorHelperLoose").colors.INPUT_BORDER_ACTIVE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyleProperties(_createForOfIteratorHelperLoose);
let closure_10 = { code: "function InputFieldContainerNativeTsx1(){const{status,ringColors,isFocused,withSpring,RING_SPRING_CONFIG}=this.__closure;let borderWidth=0;let borderColor='transparent';if(status!=='default'){borderWidth=2;borderColor=ringColors.error;}else if(isFocused){borderWidth=1;borderColor=ringColors.focused;}return{borderWidth:withSpring(borderWidth,RING_SPRING_CONFIG),borderColor:withSpring(borderColor,RING_SPRING_CONFIG),left:-borderWidth,right:-borderWidth,top:-borderWidth,bottom:-borderWidth};}" };
const result = require("jsxProd").fileFinishedImporting("design/components/Input/native/InputFieldContainer.native.tsx");

export { useInputStyles };
export const InputFieldContainer = function InputFieldContainer(isFocused) {
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  isFocused = isFocused.isFocused;
  const importDefault = tmp2;
  const status = isFocused.status;
  let str = "default";
  if (undefined !== status) {
    str = status;
  }
  let obj = { size: isFocused.size, isRound: isFocused.isRound, isDisabled: isFocused.isDisabled, grow: isFocused.grow, hasLeadingIcon: null != isFocused.leadingIcon };
  const tmp3 = useInputStyles(obj);
  const fn = function s() {
    if ("default" !== str) {
      str = tmp.error;
      let num = 2;
    } else {
      str = "transparent";
      num = 0;
      if (closure_1) {
        str = tmp.focused;
        num = 1;
      }
    }
    const obj = { borderWidth: tmp(str[9]).withSpring(num, outer1_7) };
    const obj2 = tmp(str[9]);
    obj.borderColor = tmp(str[9]).withSpring(str, outer1_7);
    obj.left = -num;
    obj.right = -num;
    obj.top = -num;
    obj.bottom = -num;
    return obj;
  };
  obj = { status: str, ringColors: tmp, isFocused: undefined !== isFocused && isFocused, withSpring: require(str[9]).withSpring, RING_SPRING_CONFIG: closure_7 };
  fn.__closure = obj;
  fn.__workletHash = 1037178877006;
  fn.__initData = closure_10;
  obj = { style: items };
  items = [, , , ];
  ({ container: arr[0], background: arr[1], radius: arr[2], minHeight: arr[3] } = tmp3);
  const animatedStyle = require(str[8]).useAnimatedStyle(fn);
  const items1 = [absoluteFill.absoluteFill, tmp3.radius, animatedStyle];
  const items2 = [callback(importDefault(str[8]).View, { style: items1 }), isFocused.children];
  obj.children = items2;
  return callback2(closure_4, obj);
};
