// Module ID: 9727
// Function ID: 75604
// Name: PaginationItem
// Dependencies: [65, 29, 31, 27, 33, 1582]
// Exports: PaginationItem

// Module 9727 (PaginationItem)
import _toConsumableArray from "_toConsumableArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import "result";
import { Pressable } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["width", "height", "borderRadius", "backgroundColor"];
let closure_4 = ["width", "height", "borderRadius", "backgroundColor"];
let closure_9 = { code: "function pnpm_PaginationItemTsx1(){const{runOnJS,handleCustomAnimation,animValue}=this.__closure;var _animValue;runOnJS(handleCustomAnimation)((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value);}" };
let closure_10 = { code: "function pnpm_PaginationItemTsx2(){const{size,defaultDotSize,dotStyle,activeDotStyle,animValue,index,count,interpolate,Extrapolation,interpolateColor,customReanimatedStyleRef}=this.__closure;var _dotStyle,_activeDotStyle,_animValue,_animValue2,_animValue3,_ref,_ref2,_customReanimatedStyl,_restStyle$transform,_customReanimatedStyl2,_customReanimatedStyl3;const{width=size||defaultDotSize,height=size||defaultDotSize,borderRadius:borderRadius,backgroundColor=\"#FFF\",...restDotStyle}=(_dotStyle=dotStyle)!==null&&_dotStyle!==void 0?_dotStyle:{};const{width:activeWidth=width,height:activeHeight=height,borderRadius:activeBorderRadius,backgroundColor:activeBackgroundColor=\"#000\",...restActiveDotStyle}=(_activeDotStyle=activeDotStyle)!==null&&_activeDotStyle!==void 0?_activeDotStyle:{};let val=Math.abs(((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value)-index);if(index===0&&((_animValue2=animValue)===null||_animValue2===void 0?void 0:_animValue2.value)>count-1)val=Math.abs(((_animValue3=animValue)===null||_animValue3===void 0?void 0:_animValue3.value)-count);const inputRange=[0,1,2];const restStyle=(_ref=val===0?restActiveDotStyle:restDotStyle)!==null&&_ref!==void 0?_ref:{};return{width:interpolate(val,inputRange,[activeWidth,width,width],Extrapolation.CLAMP),height:interpolate(val,inputRange,[activeHeight,height,height],Extrapolation.CLAMP),borderRadius:interpolate(val,inputRange,[(_ref2=activeBorderRadius!==null&&activeBorderRadius!==void 0?activeBorderRadius:borderRadius)!==null&&_ref2!==void 0?_ref2:0,borderRadius!==null&&borderRadius!==void 0?borderRadius:0,borderRadius!==null&&borderRadius!==void 0?borderRadius:0],Extrapolation.CLAMP),backgroundColor:interpolateColor(val,inputRange,[activeBackgroundColor,backgroundColor,backgroundColor]),...restStyle,...((_customReanimatedStyl=customReanimatedStyleRef.value)!==null&&_customReanimatedStyl!==void 0?_customReanimatedStyl:{}),transform:[...((_restStyle$transform=restStyle===null||restStyle===void 0?void 0:restStyle.transform)!==null&&_restStyle$transform!==void 0?_restStyle$transform:[]),...((_customReanimatedStyl2=(_customReanimatedStyl3=customReanimatedStyleRef.value)===null||_customReanimatedStyl3===void 0?void 0:_customReanimatedStyl3.transform)!==null&&_customReanimatedStyl2!==void 0?_customReanimatedStyl2:[])]};}" };

export const PaginationItem = function PaginationItem(animValue) {
  let children;
  let customReanimatedStyle;
  let horizontal;
  let onPress;
  const iter = animValue.animValue;
  const dotStyle = animValue.dotStyle;
  const activeDotStyle = animValue.activeDotStyle;
  const index = animValue.index;
  const count = animValue.count;
  let size = animValue.size;
  ({ horizontal, customReanimatedStyle } = animValue);
  const accessibilityLabel = animValue.accessibilityLabel;
  ({ children, onPress } = animValue);
  let obj = iter(activeDotStyle[5]);
  const sharedValue = obj.useSharedValue({});
  function handleCustomAnimation(arg0) {
    let obj;
    if (null != customReanimatedStyle) {
      obj = customReanimatedStyle(arg0, index, count);
    }
    if (null == obj) {
      obj = {};
    }
    sharedValue.value = obj;
  }
  let obj1 = iter(activeDotStyle[5]);
  /* worklet (recovered source) */ function pnpm_PaginationItemTsx1(){const{runOnJS,handleCustomAnimation,animValue}=this.__closure;var _animValue;runOnJS(handleCustomAnimation)((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value);}
  obj = { runOnJS: iter(activeDotStyle[5]).runOnJS, handleCustomAnimation, animValue: iter };
  pnpm_PaginationItemTsx1.__closure = obj;
  pnpm_PaginationItemTsx1.__workletHash = 10388501491479;
  pnpm_PaginationItemTsx1.__initData = closure_9;
  const derivedValue = obj1.useDerivedValue(pnpm_PaginationItemTsx1);
  let obj3 = iter(activeDotStyle[5]);
  /* worklet (recovered source) */ function pnpm_PaginationItemTsx2(){const{size,defaultDotSize,dotStyle,activeDotStyle,animValue,index,count,interpolate,Extrapolation,interpolateColor,customReanimatedStyleRef}=this.__closure;var _dotStyle,_activeDotStyle,_animValue,_animValue2,_animValue3,_ref,_ref2,_customReanimatedStyl,_restStyle$transform,_customReanimatedStyl2,_customReanimatedStyl3;const{width=size||defaultDotSize,height=size||defaultDotSize,borderRadius:borderRadius,backgroundColor="#FFF",...restDotStyle}=(_dotStyle=dotStyle)!==null&&_dotStyle!==void 0?_dotStyle:{};const{width:activeWidth=width,height:activeHeight=height,borderRadius:activeBorderRadius,backgroundColor:activeBackgroundColor="#000",...restActiveDotStyle}=(_activeDotStyle=activeDotStyle)!==null&&_activeDotStyle!==void 0?_activeDotStyle:{};let val=Math.abs(((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value)-index);if(index===0&&((_animValue2=animValue)===null||_animValue2===void 0?void 0:_animValue2.value)>count-1)val=Math.abs(((_animValue3=animValue)===null||_animValue3===void 0?void 0:_animValue3.value)-count);const inputRange=[0,1,2];const restStyle=(_ref=val===0?restActiveDotStyle:restDotStyle)!==null&&_ref!==void 0?_ref:{};return{width:interpolate(val,inputRange,[activeWidth,width,width],Extrapolation.CLAMP),height:interpolate(val,inputRange,[activeHeight,height,height],Extrapolation.CLAMP),borderRadius:interpolate(val,inputRange,[(_ref2=activeBorderRadius!==null&&activeBorderRadius!==void 0?activeBorderRadius:borderRadius)!==null&&_ref2!==void 0?_ref2:0,borderRadius!==null&&borderRadius!==void 0?borderRadius:0,borderRadius!==null&&borderRadius!==void 0?borderRadius:0],Extrapolation.CLAMP),backgroundColor:interpolateColor(val,inputRange,[activeBackgroundColor,backgroundColor,backgroundColor]),...restStyle,...((_customReanimatedStyl=customReanimatedStyleRef.value)!==null&&_customReanimatedStyl!==void 0?_customReanimatedStyl:{}),transform:[...((_restStyle$transform=restStyle===null||restStyle===void 0?void 0:restStyle.transform)!==null&&_restStyle$transform!==void 0?_restStyle$transform:[]),...((_customReanimatedStyl2=(_customReanimatedStyl3=customReanimatedStyleRef.value)===null||_customReanimatedStyl3===void 0?void 0:_customReanimatedStyl3.transform)!==null&&_customReanimatedStyl2!==void 0?_customReanimatedStyl2:[])]};}
  obj = { size, defaultDotSize: 10, dotStyle, activeDotStyle, animValue: iter, index, count, interpolate: iter(activeDotStyle[5]).interpolate, Extrapolation: iter(activeDotStyle[5]).Extrapolation, interpolateColor: iter(activeDotStyle[5]).interpolateColor, customReanimatedStyleRef: sharedValue };
  pnpm_PaginationItemTsx2.__closure = obj;
  pnpm_PaginationItemTsx2.__workletHash = 8302907289230;
  pnpm_PaginationItemTsx2.__initData = closure_10;
  let items = [iter, index, count, horizontal, dotStyle, activeDotStyle, customReanimatedStyle];
  obj1 = { onPress, accessibilityLabel, accessibilityRole: "button" };
  let str = "";
  const animatedStyle = obj3.useAnimatedStyle(pnpm_PaginationItemTsx2, items);
  if (iter.value !== index) {
    const _HermesInternal = HermesInternal;
    str = "Go to " + accessibilityLabel;
  }
  obj1.accessibilityHint = str;
  obj1.accessibilityState = { selected: iter.value === index };
  const obj2 = {};
  obj3 = { overflow: "hidden" };
  let obj4 = {};
  let str3 = "0deg";
  if (horizontal) {
    str3 = "90deg";
  }
  obj4.rotateZ = str3;
  let items1 = [obj4];
  obj3.transform = items1;
  let items2 = [obj3, dotStyle, animatedStyle];
  obj2.style = items2;
  obj2.children = children;
  obj1.children = handleCustomAnimation(dotStyle(activeDotStyle[5]).View, obj2);
  return handleCustomAnimation(sharedValue, obj1);
};
