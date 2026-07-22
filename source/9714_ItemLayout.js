// Module ID: 9714
// Function ID: 75544
// Name: ItemLayout
// Dependencies: []
// Exports: ItemLayout

// Module 9714 (ItemLayout)
importDefault(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_4 = { code: "function pnpm_ItemLayoutTsx1(){const{x,size}=this.__closure;return x.value/size;}" };
let closure_5 = { code: "function pnpm_ItemLayoutTsx2(){const{animationStyle,x,size,index}=this.__closure;return animationStyle(x.value/size,index);}" };

export const ItemLayout = function ItemLayout(animationStyle) {
  let children;
  let customConfig;
  let dataLength;
  let handlerOffset;
  let height;
  let index;
  let loop;
  let modeConfig;
  let visibleRanges;
  let width;
  ({ handlerOffset, index } = animationStyle);
  const arg1 = index;
  animationStyle = animationStyle.animationStyle;
  const importDefault = animationStyle;
  ({ children, visibleRanges } = animationStyle);
  let obj = arg1(dependencyMap[2]);
  const props = obj.useGlobalState().props;
  ({ loop, dataLength, width, height, customConfig, modeConfig } = props);
  let tmp = width;
  if (props.vertical) {
    tmp = height;
  }
  const dependencyMap = tmp;
  obj = { handlerOffset, index, size: tmp, dataLength, loop };
  let merged = Object.assign(obj, "function" === typeof customConfig ? customConfig() : {});
  if ("horizontal-stack" === props.mode) {
    obj = { handlerOffset, index, size: tmp, dataLength, loop };
    let str = "positive";
    if ("right" === modeConfig.snapDirection) {
      str = "negative";
    }
    obj.type = str;
    obj.viewCount = modeConfig.showLength;
    merged = obj;
  }
  let obj3 = arg1(dependencyMap[3]);
  const offsetX = obj3.useOffsetX(merged, visibleRanges);
  const jsx = offsetX;
  let obj4 = arg1(dependencyMap[4]);
  /* worklet (recovered source) */ function pnpm_ItemLayoutTsx1(){const{x,size}=this.__closure;return x.value/size;}
  const obj1 = { x: offsetX, size: tmp };
  pnpm_ItemLayoutTsx1.__closure = obj1;
  pnpm_ItemLayoutTsx1.__workletHash = 15967503186804;
  pnpm_ItemLayoutTsx1.__initData = closure_4;
  const items = [offsetX, tmp];
  const derivedValue = obj4.useDerivedValue(pnpm_ItemLayoutTsx1, items);
  /* worklet (recovered source) */ function pnpm_ItemLayoutTsx2(){const{animationStyle,x,size,index}=this.__closure;return animationStyle(x.value/size,index);}
  const obj2 = { animationStyle, x: offsetX, size: tmp, index };
  pnpm_ItemLayoutTsx2.__closure = obj2;
  pnpm_ItemLayoutTsx2.__workletHash = 4560717846650;
  pnpm_ItemLayoutTsx2.__initData = closure_5;
  const items1 = [animationStyle, index, offsetX, tmp];
  const animatedStyle = arg1(dependencyMap[4]).useAnimatedStyle(pnpm_ItemLayoutTsx2, items1);
  obj3 = {};
  obj4 = {};
  if (!width) {
    width = "100%";
  }
  obj4.width = width;
  if (!height) {
    height = "100%";
  }
  obj4.height = height;
  obj4.position = "absolute";
  obj4.pointerEvents = "box-none";
  const items2 = [obj4, animatedStyle];
  obj3.style = items2;
  obj3.testID = "__CAROUSEL_ITEM_" + index + "__";
  obj3.children = children({ animationValue: derivedValue });
  return jsx(importDefault(dependencyMap[4]).View, obj3);
};
