// Module ID: 9717
// Function ID: 75543
// Name: PaginationItem
// Dependencies: []
// Exports: PaginationItem

// Module 9717 (PaginationItem)
importDefault(dependencyMap[0]);
({ Pressable: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = { code: "function pnpm_PaginationItemTsx1(){const{horizontal,height,width,index,animValue,count,interpolate,Extrapolation}=this.__closure;var _animValue,_animValue2;const size=horizontal?height:width;let inputRange=[index-1,index,index+1];let outputRange=[-size,0,size];if(index===0&&((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value)>count-1){inputRange=[count-1,count,count+1];outputRange=[-size,0,size];}return{transform:[{translateX:interpolate((_animValue2=animValue)===null||_animValue2===void 0?void 0:_animValue2.value,inputRange,outputRange,Extrapolation.CLAMP)}]};}" };

export const PaginationItem = function PaginationItem(animValue) {
  let activeDotStyle;
  let children;
  let dotStyle;
  let horizontal;
  let index;
  let onPress;
  let size;
  const arg1 = iter;
  ({ dotStyle, index } = animValue);
  const importDefault = index;
  const count = animValue.count;
  const dependencyMap = count;
  ({ size, horizontal } = animValue);
  const accessibilityLabel = animValue.accessibilityLabel;
  const size2 = {};
  let num = size;
  ({ activeDotStyle, children, onPress } = animValue);
  if (!size) {
    let width;
    if (null != dotStyle) {
      width = dotStyle.width;
    }
    num = width;
  }
  if (!num) {
    num = 10;
  }
  size2.width = num;
  if (!size) {
    let height;
    if (null != dotStyle) {
      height = dotStyle.height;
    }
    size = height;
  }
  if (!size) {
    size = 10;
  }
  size2.height = size;
  width = size2.width;
  height = size2.height;
  const jsx = height;
  let obj = arg1(dependencyMap[3]);
  /* worklet (recovered source) */ function pnpm_PaginationItemTsx1(){const{runOnJS,handleCustomAnimation,animValue}=this.__closure;var _animValue;runOnJS(handleCustomAnimation)((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value);}
  obj = { horizontal, height, width, index, animValue: iter, count, interpolate: arg1(dependencyMap[3]).interpolate, Extrapolation: arg1(dependencyMap[3]).Extrapolation };
  pnpm_PaginationItemTsx1.__closure = obj;
  pnpm_PaginationItemTsx1.__workletHash = 1536479533103;
  pnpm_PaginationItemTsx1.__initData = closure_6;
  const items = [animValue.animValue, index, count, horizontal];
  obj = { onPress, accessibilityLabel, accessibilityRole: "button" };
  let str = "";
  const animatedStyle = obj.useAnimatedStyle(pnpm_PaginationItemTsx1, items);
  if (animValue.animValue.value !== index) {
    const _HermesInternal = HermesInternal;
    str = "Go to " + accessibilityLabel;
  }
  obj.accessibilityHint = str;
  obj.accessibilityState = { selected: animValue.animValue.value === index };
  const obj1 = {};
  const obj2 = { width, height, overflow: "hidden" };
  const obj3 = {};
  let str3 = "0deg";
  if (horizontal) {
    str3 = "90deg";
  }
  obj3.rotateZ = str3;
  const items1 = [obj3];
  obj2.transform = items1;
  const items2 = [obj2, dotStyle];
  obj1.style = items2;
  const items3 = [{ "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000842331342731974, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022119020259308952 }, animatedStyle, activeDotStyle];
  obj1.children = jsx(importDefault(dependencyMap[3]).View, { style: items3, children });
  obj.children = <width {...obj1} />;
  return <horizontal {...obj} />;
};
