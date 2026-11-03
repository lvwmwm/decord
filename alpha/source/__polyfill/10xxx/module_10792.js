// Module ID: 10792
// Function ID: 10793
// Dependencies: [109, 19, 17, 21, 1652]
// Exports: PaginationItem

// Module 10792
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;

let closure_3 = ["width", "height", "borderRadius", "backgroundColor"];
let closure_4 = ["width", "height", "borderRadius", "backgroundColor"];
const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
let closure_8 = { code: "(function pnpm_PaginationItemTsx1(){let[runOnJS,handleCustomAnimation,animValue]=this.__closure;var _animValue;runOnJS(handleCustomAnimation)((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value);})" };
let closure_9 = { code: "(function pnpm_PaginationItemTsx2(){let[size,defaultDotSize,dotStyle,activeDotStyle,animValue,index,count,interpolate,Extrapolation,interpolateColor,customReanimatedStyleRef]=this.__closure;var _dotStyle,_activeDotStyle,_animValue,_animValue2,_animValue3,_ref,_ref2,_customReanimatedStyl,_restStyle$transform,_customReanimatedStyl2,_customReanimatedStyl3;const{width=size||defaultDotSize,height=size||defaultDotSize,borderRadius:borderRadius,backgroundColor=\"#FFF\",...restDotStyle}=(_dotStyle=dotStyle)!==null&&_dotStyle!==void 0?_dotStyle:{};const{width:activeWidth=width,height:activeHeight=height,borderRadius:activeBorderRadius,backgroundColor:activeBackgroundColor=\"#000\",...restActiveDotStyle}=(_activeDotStyle=activeDotStyle)!==null&&_activeDotStyle!==void 0?_activeDotStyle:{};let val=Math.abs(((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value)-index);if(index===0&&((_animValue2=animValue)===null||_animValue2===void 0?void 0:_animValue2.value)>count-1)val=Math.abs(((_animValue3=animValue)===null||_animValue3===void 0?void 0:_animValue3.value)-count);const inputRange=[0,1,2];const restStyle=(_ref=val===0?restActiveDotStyle:restDotStyle)!==null&&_ref!==void 0?_ref:{};return{width:interpolate(val,inputRange,[activeWidth,width,width],Extrapolation.CLAMP),height:interpolate(val,inputRange,[activeHeight,height,height],Extrapolation.CLAMP),borderRadius:interpolate(val,inputRange,[(_ref2=activeBorderRadius!==null&&activeBorderRadius!==void 0?activeBorderRadius:borderRadius)!==null&&_ref2!==void 0?_ref2:0,borderRadius!==null&&borderRadius!==void 0?borderRadius:0,borderRadius!==null&&borderRadius!==void 0?borderRadius:0],Extrapolation.CLAMP),backgroundColor:interpolateColor(val,inputRange,[activeBackgroundColor,backgroundColor,backgroundColor]),...restStyle,...((_customReanimatedStyl=customReanimatedStyleRef.value)!==null&&_customReanimatedStyl!==void 0?_customReanimatedStyl:{}),transform:[...((_restStyle$transform=restStyle===null||restStyle===void 0?void 0:restStyle.transform)!==null&&_restStyle$transform!==void 0?_restStyle$transform:[]),...((_customReanimatedStyl2=(_customReanimatedStyl3=customReanimatedStyleRef.value)===null||_customReanimatedStyl3===void 0?void 0:_customReanimatedStyl3.transform)!==null&&_customReanimatedStyl2!==void 0?_customReanimatedStyl2:[])]};})" };

export const PaginationItem = (count) => {
  let activeDotStyle;
  let animValue;
  let children;
  let customReanimatedStyle;
  let dotStyle;
  let horizontal;
  let index;
  let items5;
  let onPress;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  ({ animValue, dotStyle, activeDotStyle, index } = count);
  count = count.count;
  ({ horizontal, customReanimatedStyle } = count);
  const accessibilityLabel = count.accessibilityLabel;
  let tmp = index;
  const tmp2 = customReanimatedStyle;
  ({ size, children, onPress } = count);
  let obj = index(customReanimatedStyle[4]);
  const sharedValue = obj.useSharedValue({});
  let items = [closure_8, , , ];
  const useDerivedValue = index(customReanimatedStyle[4]).useDerivedValue;
  const tmp4 = index(customReanimatedStyle[4]);
  items[1] = index(customReanimatedStyle[4]).runOnJS;
  items[2] = (arg0) => {
    let obj;
    const tmp = sharedValue;
    if (customReanimatedStyle != null) {
      obj = tmp2(arg0, index, count);
    }
    if (obj == null) {
      obj = {};
    }
    tmp.value = obj;
  };
  items[3] = animValue;
  [tmp5, tmp6, tmp7, tmp8] = items;
  function pnpm_PaginationItemTsx1() {
    let value;
    const tmp = _undefined(c1);
    if (_undefined2 != null) {
      value = _undefined2.value;
    }
    tmp(value);
  }
  let items1 = [tmp6, tmp7, tmp8];
  pnpm_PaginationItemTsx1.__closure = items1;
  pnpm_PaginationItemTsx1.__workletHash = 8160033721614;
  pnpm_PaginationItemTsx1.__initData = tmp5;
  const derivedValue = useDerivedValue(pnpm_PaginationItemTsx1);
  let items2 = [closure_9, size, 10, dotStyle, activeDotStyle, animValue, index, count, , , , ];
  const useAnimatedStyle = tmp(tmp2[4]).useAnimatedStyle;
  const tmpResult = tmp(tmp2[4]);
  items2[8] = tmp(tmp2[4]).interpolate;
  items2[9] = tmp(tmp2[4]).Extrapolation;
  items2[10] = tmp(tmp2[4]).interpolateColor;
  items2[11] = sharedValue;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22] = items2;
  function pnpm_PaginationItemTsx2() {
    let backgroundColor;
    let backgroundColor2;
    let borderRadius;
    let borderRadius2;
    let items1;
    let items2;
    let items3;
    let items4;
    let items5;
    let tmp12;
    let tmp13;
    size = c2;
    if (c2 == null) {
      size = {};
    }
    let width = size.width;
    if (undefined === width) {
      width = c0 || c1;
    }
    let height = size.height;
    if (undefined === height) {
      height = c0 || c1;
    }
    ({ borderRadius, backgroundColor } = size);
    let str = "#FFF";
    if (undefined !== backgroundColor) {
      str = backgroundColor;
    }
    let obj = _objectWithoutProperties(size, sharedValue);
    let size2 = c3;
    const tmp3 = _objectWithoutProperties;
    if (c3 == null) {
      size2 = {};
    }
    let width2 = size2.width;
    if (undefined === width2) {
      width2 = width;
    }
    let height2 = size2.height;
    if (undefined === height2) {
      height2 = height;
    }
    ({ borderRadius: borderRadius2, backgroundColor: backgroundColor2 } = size2);
    let str2 = "#000";
    if (undefined !== backgroundColor2) {
      str2 = backgroundColor2;
    }
    let value5;
    const _Math = Math;
    const tmp3Result = tmp3(size2, closure_2_4);
    if (c4 != null) {
      value5 = iter.value;
    }
    let absResult = abs(value5 - c5);
    let tmp7 = 0 === c5;
    if (tmp7) {
      let value6;
      if (c4 != null) {
        value6 = iter.value;
      }
      tmp7 = value6 > c6 - 1;
    }
    if (tmp7) {
      let value7;
      const _Math2 = Math;
      const abs2 = Math.abs;
      if (c4 != null) {
        value7 = iter.value;
      }
      absResult = abs2(value7 - c6);
    }
    if (0 === absResult) {
      obj = tmp3Result;
    }
    if (obj == null) {
      obj = {};
    }
    const items = [0, 1, 2];
    const size1 = { width: _undefined(absResult, items, items1, _undefined2.CLAMP), height: _undefined(absResult, items, items2, _undefined2.CLAMP), borderRadius: tmp12(absResult, items, items3, tmp13.CLAMP), backgroundColor: _undefined3(absResult, items, items4), transform: items5 };
    items1 = [width2, width, width];
    items2 = [height2, height, height];
    tmp12 = _undefined;
    tmp13 = _undefined2;
    if (borderRadius2 == null) {
      borderRadius2 = borderRadius;
    }
    if (borderRadius2 == null) {
      borderRadius2 = 0;
    }
    items3 = [borderRadius2, , ];
    let num2 = borderRadius;
    if (borderRadius == null) {
      num2 = 0;
    }
    items3[1] = num2;
    if (borderRadius == null) {
      borderRadius = 0;
    }
    items3[2] = borderRadius;
    items4 = [str2, str, str];
    const merged = Object.assign(obj);
    let value8 = _undefined4.value;
    const iter2 = _undefined4;
    if (value8 == null) {
      value8 = {};
    }
    const merged1 = Object.assign(value8);
    let transform;
    if (obj != null) {
      transform = obj.transform;
    }
    if (transform == null) {
      transform = [];
    }
    items5 = [...transform];
    const value = iter2.value;
    let transform1;
    if (value != null) {
      transform1 = value.transform;
    }
    if (transform1 == null) {
      transform1 = [];
    }
    HermesBuiltin.arraySpread(items5, transform1, tmp16);
    return size1;
  }
  let items3 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22];
  pnpm_PaginationItemTsx2.__closure = items3;
  pnpm_PaginationItemTsx2.__workletHash = 3887987744151;
  pnpm_PaginationItemTsx2.__initData = tmp11;
  let items4 = [animValue, index, count, horizontal, dotStyle, activeDotStyle, customReanimatedStyle];
  let str = "";
  const animatedStyle = useAnimatedStyle(pnpm_PaginationItemTsx2, items4);
  if (animValue.value !== index) {
    const _HermesInternal = HermesInternal;
    let str2 = "Go to ";
    str = "Go to " + accessibilityLabel;
  }
  let str3 = "0deg";
  const View = count(tmp2[4]).View;
  if (horizontal) {
    str3 = "90deg";
  }
  const obj4 = { overflow: "hidden", transform: items5 };
  items5 = [{ rotateZ: str3 }];
  const items6 = [obj4, dotStyle, animatedStyle];
  return <tmp25 onPress={onPress} accessibilityLabel={accessibilityLabel} accessibilityRole="button" accessibilityHint={str} accessibilityState={{ selected: animValue.value === index }}>{null}</tmp25>;
};
