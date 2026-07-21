// Module ID: 9719
// Function ID: 75539
// Name: PaginationItem
// Dependencies: []
// Exports: PaginationItem

// Module 9719 (PaginationItem)
let closure_3 = ["__h", "PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED", "ay", "headMetaSocial"];
let closure_4 = ["__h", "PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED", "ay", "headMetaSocial"];
let closure_5 = importDefault(dependencyMap[0]);
let closure_6 = importDefault(dependencyMap[1]);
importDefault(dependencyMap[2]);
const Pressable = arg1(dependencyMap[3]).Pressable;
const jsx = arg1(dependencyMap[4]).jsx;
let closure_9 = { code: "function pnpm_PaginationItemTsx1(){const{runOnJS,handleCustomAnimation,animValue}=this.__closure;var _animValue;runOnJS(handleCustomAnimation)((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value);}" };
let closure_10 = { code: "function pnpm_PaginationItemTsx2(){const{size,defaultDotSize,dotStyle,activeDotStyle,animValue,index,count,interpolate,Extrapolation,interpolateColor,customReanimatedStyleRef}=this.__closure;var _dotStyle,_activeDotStyle,_animValue,_animValue2,_animValue3,_ref,_ref2,_customReanimatedStyl,_restStyle$transform,_customReanimatedStyl2,_customReanimatedStyl3;const{width=size||defaultDotSize,height=size||defaultDotSize,borderRadius:borderRadius,backgroundColor=\"#FFF\",...restDotStyle}=(_dotStyle=dotStyle)!==null&&_dotStyle!==void 0?_dotStyle:{};const{width:activeWidth=width,height:activeHeight=height,borderRadius:activeBorderRadius,backgroundColor:activeBackgroundColor=\"#000\",...restActiveDotStyle}=(_activeDotStyle=activeDotStyle)!==null&&_activeDotStyle!==void 0?_activeDotStyle:{};let val=Math.abs(((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value)-index);if(index===0&&((_animValue2=animValue)===null||_animValue2===void 0?void 0:_animValue2.value)>count-1)val=Math.abs(((_animValue3=animValue)===null||_animValue3===void 0?void 0:_animValue3.value)-count);const inputRange=[0,1,2];const restStyle=(_ref=val===0?restActiveDotStyle:restDotStyle)!==null&&_ref!==void 0?_ref:{};return{width:interpolate(val,inputRange,[activeWidth,width,width],Extrapolation.CLAMP),height:interpolate(val,inputRange,[activeHeight,height,height],Extrapolation.CLAMP),borderRadius:interpolate(val,inputRange,[(_ref2=activeBorderRadius!==null&&activeBorderRadius!==void 0?activeBorderRadius:borderRadius)!==null&&_ref2!==void 0?_ref2:0,borderRadius!==null&&borderRadius!==void 0?borderRadius:0,borderRadius!==null&&borderRadius!==void 0?borderRadius:0],Extrapolation.CLAMP),backgroundColor:interpolateColor(val,inputRange,[activeBackgroundColor,backgroundColor,backgroundColor]),...restStyle,...((_customReanimatedStyl=customReanimatedStyleRef.value)!==null&&_customReanimatedStyl!==void 0?_customReanimatedStyl:{}),transform:[...((_restStyle$transform=restStyle===null||restStyle===void 0?void 0:restStyle.transform)!==null&&_restStyle$transform!==void 0?_restStyle$transform:[]),...((_customReanimatedStyl2=(_customReanimatedStyl3=customReanimatedStyleRef.value)===null||_customReanimatedStyl3===void 0?void 0:_customReanimatedStyl3.transform)!==null&&_customReanimatedStyl2!==void 0?_customReanimatedStyl2:[])]};}" };

export const PaginationItem = function PaginationItem(animValue) {
  let children;
  let customReanimatedStyle;
  let horizontal;
  let onPress;
  const arg1 = iter;
  const dotStyle = animValue.dotStyle;
  const importDefault = dotStyle;
  const activeDotStyle = animValue.activeDotStyle;
  const dependencyMap = activeDotStyle;
  const index = animValue.index;
  let closure_3 = index;
  const count = animValue.count;
  let closure_4 = count;
  const size = animValue.size;
  let closure_5 = size;
  ({ horizontal, customReanimatedStyle } = animValue);
  let closure_6 = customReanimatedStyle;
  const accessibilityLabel = animValue.accessibilityLabel;
  ({ children, onPress } = animValue);
  let obj = arg1(dependencyMap[5]);
  const sharedValue = obj.useSharedValue({});
  const Pressable = sharedValue;
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
  const jsx = handleCustomAnimation;
  let obj1 = arg1(dependencyMap[5]);
  /* worklet (recovered source) */ function pnpm_PaginationItemTsx1(){const{runOnJS,handleCustomAnimation,animValue}=this.__closure;var _animValue;runOnJS(handleCustomAnimation)((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value);}
  obj = { runOnJS: arg1(dependencyMap[5]).runOnJS, handleCustomAnimation, animValue: iter };
  pnpm_PaginationItemTsx1.__closure = obj;
  pnpm_PaginationItemTsx1.__workletHash = 10388501491479;
  pnpm_PaginationItemTsx1.__initData = closure_9;
  const derivedValue = obj1.useDerivedValue(pnpm_PaginationItemTsx1);
  let obj3 = arg1(dependencyMap[5]);
  /* worklet (recovered source) */ function pnpm_PaginationItemTsx2(){const{size,defaultDotSize,dotStyle,activeDotStyle,animValue,index,count,interpolate,Extrapolation,interpolateColor,customReanimatedStyleRef}=this.__closure;var _dotStyle,_activeDotStyle,_animValue,_animValue2,_animValue3,_ref,_ref2,_customReanimatedStyl,_restStyle$transform,_customReanimatedStyl2,_customReanimatedStyl3;const{width=size||defaultDotSize,height=size||defaultDotSize,borderRadius:borderRadius,backgroundColor="#FFF",...restDotStyle}=(_dotStyle=dotStyle)!==null&&_dotStyle!==void 0?_dotStyle:{};const{width:activeWidth=width,height:activeHeight=height,borderRadius:activeBorderRadius,backgroundColor:activeBackgroundColor="#000",...restActiveDotStyle}=(_activeDotStyle=activeDotStyle)!==null&&_activeDotStyle!==void 0?_activeDotStyle:{};let val=Math.abs(((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value)-index);if(index===0&&((_animValue2=animValue)===null||_animValue2===void 0?void 0:_animValue2.value)>count-1)val=Math.abs(((_animValue3=animValue)===null||_animValue3===void 0?void 0:_animValue3.value)-count);const inputRange=[0,1,2];const restStyle=(_ref=val===0?restActiveDotStyle:restDotStyle)!==null&&_ref!==void 0?_ref:{};return{width:interpolate(val,inputRange,[activeWidth,width,width],Extrapolation.CLAMP),height:interpolate(val,inputRange,[activeHeight,height,height],Extrapolation.CLAMP),borderRadius:interpolate(val,inputRange,[(_ref2=activeBorderRadius!==null&&activeBorderRadius!==void 0?activeBorderRadius:borderRadius)!==null&&_ref2!==void 0?_ref2:0,borderRadius!==null&&borderRadius!==void 0?borderRadius:0,borderRadius!==null&&borderRadius!==void 0?borderRadius:0],Extrapolation.CLAMP),backgroundColor:interpolateColor(val,inputRange,[activeBackgroundColor,backgroundColor,backgroundColor]),...restStyle,...((_customReanimatedStyl=customReanimatedStyleRef.value)!==null&&_customReanimatedStyl!==void 0?_customReanimatedStyl:{}),transform:[...((_restStyle$transform=restStyle===null||restStyle===void 0?void 0:restStyle.transform)!==null&&_restStyle$transform!==void 0?_restStyle$transform:[]),...((_customReanimatedStyl2=(_customReanimatedStyl3=customReanimatedStyleRef.value)===null||_customReanimatedStyl3===void 0?void 0:_customReanimatedStyl3.transform)!==null&&_customReanimatedStyl2!==void 0?_customReanimatedStyl2:[])]};}
  obj = { size, defaultDotSize: 10, dotStyle, activeDotStyle, animValue: iter, index, count, interpolate: arg1(dependencyMap[5]).interpolate, Extrapolation: arg1(dependencyMap[5]).Extrapolation, interpolateColor: arg1(dependencyMap[5]).interpolateColor, customReanimatedStyleRef: sharedValue };
  pnpm_PaginationItemTsx2.__closure = obj;
  pnpm_PaginationItemTsx2.__workletHash = 8302907289230;
  pnpm_PaginationItemTsx2.__initData = closure_10;
  const items = [animValue.animValue, index, count, horizontal, dotStyle, activeDotStyle, customReanimatedStyle];
  obj1 = { onPress, accessibilityLabel, accessibilityRole: "button" };
  let str = "";
  const animatedStyle = obj3.useAnimatedStyle(pnpm_PaginationItemTsx2, items);
  if (animValue.animValue.value !== index) {
    const _HermesInternal = HermesInternal;
    str = "Go to " + accessibilityLabel;
  }
  obj1.accessibilityHint = str;
  obj1.accessibilityState = { selected: animValue.animValue.value === index };
  const obj2 = {};
  obj3 = { overflow: "hidden" };
  const obj4 = {};
  let str3 = "0deg";
  if (horizontal) {
    str3 = "90deg";
  }
  obj4.rotateZ = str3;
  const items1 = [obj4];
  obj3.transform = items1;
  const items2 = [obj3, dotStyle, animatedStyle];
  obj2.style = items2;
  obj2.children = children;
  obj1.children = jsx(importDefault(dependencyMap[5]).View, obj2);
  return <Pressable {...obj1} />;
};
