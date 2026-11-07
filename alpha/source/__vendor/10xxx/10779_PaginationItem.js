// Module ID: 10779
// Function ID: 10780
// Name: PaginationItem
// Dependencies: [19, 17, 21, 1652]
// Exports: PaginationItem

// Module 10779 (PaginationItem)
import Fragment from "Fragment" /* 21 */;
import _mod1652 from "module_1652" /* 1652 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

let c3;
let closure_4;
({ Pressable: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = { code: "(function pnpm_PaginationItemTsx1(){let[horizontal,height,width,index,animValue,count,interpolate,Extrapolation]=this.__closure;var _animValue,_animValue2;const size=horizontal?height:width;let inputRange=[index-1,index,index+1];let outputRange=[-size,0,size];if(index===0&&((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value)>count-1){inputRange=[count-1,count,count+1];outputRange=[-size,0,size];}return{transform:[{translateX:interpolate((_animValue2=animValue)===null||_animValue2===void 0?void 0:_animValue2.value,inputRange,outputRange,Extrapolation.CLAMP)}]};})" };

export const PaginationItem = (arg0) => {
  let accessibilityLabel;
  let activeDotStyle;
  let animValue;
  let children;
  let count;
  let dotStyle;
  let horizontal;
  let index;
  let items3;
  let items4;
  let onPress;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ animValue, dotStyle, index, count, size, horizontal, accessibilityLabel } = arg0);
  let num = size;
  ({ activeDotStyle, children, onPress } = arg0);
  if (!size) {
    let tmp = null;
    let width;
    if (dotStyle != null) {
      width = dotStyle.width;
    }
    num = width;
  }
  if (!num) {
    num = 10;
  }
  if (!size) {
    let height;
    if (dotStyle != null) {
      height = dotStyle.height;
    }
    size = height;
  }
  if (!size) {
    size = 10;
  }
  let items = [closure_6, horizontal, size, num, index, animValue, count, , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  items[7] = _mod1652.interpolate;
  items[8] = _mod1652.Extrapolation;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items;
  function pnpm_PaginationItemTsx1() {
    let items4;
    const tmp = c0 ? c1 : c2;
    let items = [c3 - 1, c3, c3 + 1];
    let items1 = [-tmp, 0, tmp];
    let tmp2 = 0 === c3;
    if (tmp2) {
      let value;
      if (_undefined != null) {
        value = _undefined.value;
      }
      tmp2 = value > c5 - 1;
    }
    if (tmp2) {
      const items2 = [c5 - 1, c5, c5 + 1];
      const items3 = [-tmp, 0, tmp];
      items1 = items3;
      items = items2;
    }
    let value2;
    if (_undefined != null) {
      value2 = _undefined.value;
    }
    const obj = { transform: items4 };
    items4 = [{ translateX: tmp7(value2, items, items1, _undefined2.CLAMP) }];
    ({ translateX: _undefined(value2, items, items1, _undefined2.CLAMP) });
    return obj;
  }
  let items1 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  pnpm_PaginationItemTsx1.__closure = items1;
  pnpm_PaginationItemTsx1.__workletHash = 15722277563702;
  pnpm_PaginationItemTsx1.__initData = tmp7;
  let items2 = [animValue, index, count, horizontal];
  let str = "";
  const animatedStyle = useAnimatedStyle(pnpm_PaginationItemTsx1, items2);
  if (animValue.value !== index) {
    const _HermesInternal = HermesInternal;
    str = "Go to " + accessibilityLabel;
  }
  const size1 = { width: num, height: size, overflow: "hidden", transform: items3 };
  let str3 = "0deg";
  if (horizontal) {
    str3 = "90deg";
  }
  const obj2 = { style: items4, children: null };
  items3 = [{ rotateZ: str3 }];
  items4 = [size1, dotStyle];
  const items5 = [{ backgroundColor: "black", flex: 1 }, animatedStyle, activeDotStyle];
  return <tmp18 onPress={onPress} accessibilityLabel={accessibilityLabel} accessibilityRole="button" accessibilityHint={str} accessibilityState={{ selected: animValue.value === index }}>{null}</tmp18>;
};
