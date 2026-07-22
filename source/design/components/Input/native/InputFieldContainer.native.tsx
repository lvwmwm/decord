// Module ID: 5775
// Function ID: 49438
// Name: useInputStyles
// Dependencies: []
// Exports: InputFieldContainer

// Module 5775 (useInputStyles)
let Platform;
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
    let INPUT_FIELD_RADIUS_LG = importDefault(dependencyMap[3]).modules.mobile.INPUT_FIELD_RADIUS_SM;
  } else if ("md" === str) {
    INPUT_FIELD_RADIUS_LG = importDefault(dependencyMap[3]).modules.mobile.INPUT_FIELD_RADIUS_MD;
  } else if ("lg" === str) {
    INPUT_FIELD_RADIUS_LG = importDefault(dependencyMap[3]).modules.mobile.INPUT_FIELD_RADIUS_LG;
  }
  let token = arg1(dependencyMap[4]).useToken(INPUT_FIELD_RADIUS_LG);
  const obj = arg1(dependencyMap[4]);
  const tmp = arg1;
  if (flag) {
    token = tmpResult.useToken(importDefault(tmp2[3]).modules.mobile.INPUT_FIELD_ROUND_RADIUS);
  }
  const tmp10 = arg1;
  const tmpResult = arg1(dependencyMap[4]);
  if ("sm" === str) {
    let INPUT_FIELD_TEXT_STYLE_LG = importDefault(dependencyMap[3]).modules.mobile.INPUT_FIELD_TEXT_STYLE_SM;
  } else if ("md" === str) {
    INPUT_FIELD_TEXT_STYLE_LG = importDefault(dependencyMap[3]).modules.mobile.INPUT_FIELD_TEXT_STYLE_MD;
  } else if ("lg" === str) {
    INPUT_FIELD_TEXT_STYLE_LG = importDefault(dependencyMap[3]).modules.mobile.INPUT_FIELD_TEXT_STYLE_LG;
  }
  const token1 = arg1(dependencyMap[4]).useToken(INPUT_FIELD_TEXT_STYLE_LG);
  const obj3 = arg1(dependencyMap[4]);
  return callback3(str, flag2, flag3, token, token1, tmp10(dependencyMap[4]).useToken(importDefault(dependencyMap[3]).modules.mobile.INPUT_FIELD_PADDING_VERTICAL_SM_IOS));
}
importAll(dependencyMap[0]);
({ Platform, StyleSheet: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = { marginVertical: null, maxHeight: null, maxWidth: null, minHeight: null };
let obj = arg1(dependencyMap[5]);
let closure_8 = obj.createStyles(() => {
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
  let obj = { sm: arg1(dependencyMap[6]).InputHeights.SM, md: arg1(dependencyMap[6]).InputHeights.MD, lg: arg1(dependencyMap[6]).InputHeights.LG };
  obj = { sm: importDefault(dependencyMap[3]).space.PX_8, md: importDefault(dependencyMap[3]).space.PX_12, lg: importDefault(dependencyMap[3]).space.PX_16 };
  obj = { sm: importDefault(dependencyMap[3]).space.PX_4, md: importDefault(dependencyMap[3]).space.PX_8, lg: importDefault(dependencyMap[3]).space.PX_8 };
  const obj1 = { sm: { paddingHorizontal: importDefault(dependencyMap[3]).space.PX_8, paddingVertical: importDefault(dependencyMap[3]).space.PX_4 } };
  const obj2 = { paddingHorizontal: importDefault(dependencyMap[3]).space.PX_8, paddingVertical: importDefault(dependencyMap[3]).space.PX_4 };
  obj1.md = { paddingHorizontal: importDefault(dependencyMap[3]).space.PX_12, paddingVertical: importDefault(dependencyMap[3]).space.PX_8 };
  const obj3 = { paddingHorizontal: importDefault(dependencyMap[3]).space.PX_12, paddingVertical: importDefault(dependencyMap[3]).space.PX_8 };
  obj1.lg = { paddingHorizontal: importDefault(dependencyMap[3]).space.PX_16, paddingVertical: importDefault(dependencyMap[3]).space.PX_8 + 2 };
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
  const obj4 = { paddingHorizontal: importDefault(dependencyMap[3]).space.PX_16, paddingVertical: importDefault(dependencyMap[3]).space.PX_8 + 2 };
  obj5.background = { backgroundColor: importDefault(dependencyMap[3]).colors.INPUT_BACKGROUND_DEFAULT, borderWidth: importDefault(dependencyMap[3]).modules.mobile.INPUT_FIELD_BORDER_WIDTH, borderColor: importDefault(dependencyMap[3]).colors.INPUT_BORDER_DEFAULT };
  const obj7 = { backgroundColor: importDefault(dependencyMap[3]).colors.INPUT_BACKGROUND_DEFAULT, borderWidth: importDefault(dependencyMap[3]).modules.mobile.INPUT_FIELD_BORDER_WIDTH, borderColor: importDefault(dependencyMap[3]).colors.INPUT_BORDER_DEFAULT };
  obj5.placeholderText = { color: importDefault(dependencyMap[3]).colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
  obj5.minHeight = { minHeight: obj[str] };
  const obj9 = { borderRadius: num };
  obj5.radius = obj9;
  obj5.padding = obj1[str];
  const obj10 = {};
  const merged = Object.assign(arg1(dependencyMap[7]).TextStyleSheet[str2]);
  obj10["lineHeight"] = undefined;
  const colors = importDefault(dependencyMap[3]).colors;
  obj10["color"] = flag ? colors.TEXT_MUTED : colors.TEXT_DEFAULT;
  obj10["flexGrow"] = 1;
  obj5.text = obj10;
  const obj11 = {};
  const merged1 = Object.assign(tmp3);
  obj11["paddingEnd"] = obj[str];
  obj11["zIndex"] = 1;
  obj11["pointerEvents"] = "none";
  obj5.leadingText = obj11;
  const obj12 = { "Bool(false)": 40, "Bool(false)": 40 };
  const merged2 = Object.assign(tmp3);
  obj12["paddingStart"] = obj[str];
  obj12["zIndex"] = 1;
  obj12["pointerEvents"] = "none";
  obj5.trailingText = obj12;
  const obj13 = { display: 131420590, flexDirection: -1717986767, flexGrow: -644245095, alignItems: 94527, paddingTop: obj[str], paddingBottom: obj[str], paddingStart: obj[str], paddingEnd: obj[str], justifyContent: "center", zIndex: 1, pointerEvents: "none" };
  obj5.leadingIcon = obj13;
  const obj14 = { ruleId: 131420590, label: -1717986767, days: -644245095, enabled: 94527, paddingTop: obj[str], paddingBottom: obj[str], paddingStart: obj[str], paddingEnd: obj[str], justifyContent: "center", zIndex: 1, pointerEvents: "none" };
  obj5.trailingIcon = obj14;
  const obj15 = {};
  const merged3 = Object.assign(tmp3);
  obj15["borderRightWidth"] = 1;
  obj15["borderRightColor"] = importDefault(dependencyMap[3]).colors.BORDER_STRONG;
  obj5.splitBorder = obj15;
  return obj5;
});
const tmp4 = arg1(dependencyMap[2]);
obj = { error: importDefault(dependencyMap[3]).colors.INPUT_BORDER_ERROR_DEFAULT, default: "transparent", focused: importDefault(dependencyMap[3]).colors.INPUT_BORDER_ACTIVE };
let closure_9 = arg1(dependencyMap[5]).createStyleProperties(obj);
let closure_10 = { code: "function InputFieldContainerNativeTsx1(){const{status,ringColors,isFocused,withSpring,RING_SPRING_CONFIG}=this.__closure;let borderWidth=0;let borderColor='transparent';if(status!=='default'){borderWidth=2;borderColor=ringColors.error;}else if(isFocused){borderWidth=1;borderColor=ringColors.focused;}return{borderWidth:withSpring(borderWidth,RING_SPRING_CONFIG),borderColor:withSpring(borderColor,RING_SPRING_CONFIG),left:-borderWidth,right:-borderWidth,top:-borderWidth,bottom:-borderWidth};}" };
const obj2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("design/components/Input/native/InputFieldContainer.native.tsx");

export { useInputStyles };
export const InputFieldContainer = function InputFieldContainer(isFocused) {
  const tmp = callback4();
  const arg1 = tmp;
  isFocused = isFocused.isFocused;
  const importDefault = tmp2;
  const status = isFocused.status;
  let str = "default";
  if (undefined !== status) {
    str = status;
  }
  const dependencyMap = str;
  let obj = { size: isFocused.size, isRound: isFocused.isRound, isDisabled: isFocused.isDisabled, grow: isFocused.grow, hasLeadingIcon: null != isFocused.leadingIcon };
  const tmp3 = useInputStyles(obj);
  const fn = function s() {
    if ("default" !== str) {
      let str = tmp.error;
      let num = 2;
    } else {
      str = "transparent";
      num = 0;
      if (tmp2) {
        str = tmp.focused;
        num = 1;
      }
    }
    const obj = { borderWidth: tmp(str[9]).withSpring(num, closure_7) };
    const obj2 = tmp(str[9]);
    obj.borderColor = tmp(str[9]).withSpring(str, closure_7);
    obj.left = -num;
    obj.right = -num;
    obj.top = -num;
    obj.bottom = -num;
    return obj;
  };
  obj = { status: str, ringColors: tmp, isFocused: undefined !== isFocused && isFocused, withSpring: arg1(dependencyMap[9]).withSpring, RING_SPRING_CONFIG: closure_7 };
  fn.__closure = obj;
  fn.__workletHash = 1037178877006;
  fn.__initData = closure_10;
  obj = { style: items };
  const items = [, , , ];
  ({ container: arr[0], background: arr[1], radius: arr[2], minHeight: arr[3] } = tmp3);
  const animatedStyle = arg1(dependencyMap[8]).useAnimatedStyle(fn);
  const items1 = [absoluteFill.absoluteFill, tmp3.radius, animatedStyle];
  const items2 = [callback(importDefault(dependencyMap[8]).View, { style: items1 }), isFocused.children];
  obj.children = items2;
  return callback2(closure_4, obj);
};
