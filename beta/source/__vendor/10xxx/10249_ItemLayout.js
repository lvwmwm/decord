// Module ID: 10249
// Function ID: 10250
// Name: ItemLayout
// Dependencies: [19, 21, 10232, 10250, 1638]
// Exports: ItemLayout

// Module 10249 (ItemLayout)
import Fragment from "Fragment" /* 21 */;
import _mod1638 from "module_1638" /* 1638 */;
import _mod10232 from "module_10232" /* 10232 */;
import _mod10250 from "module_10250" /* 10250 */;
import react from "react" /* 19 */;

const _modDef1638 = _mod1638;

const jsx = Fragment.jsx;
const __initData = { code: "function pnpm_ItemLayoutTsx1(){const{x,size}=this.__closure;return x.value/size;}" };
const __initData2 = { code: "function pnpm_ItemLayoutTsx2(){const{animationStyle,x,size,index}=this.__closure;return animationStyle(x.value/size,index);}" };

export const ItemLayout = (animationStyle) => {
  let children;
  let customConfig;
  let dataLength;
  let handlerOffset;
  let height;
  let index;
  let items2;
  let loop;
  let modeConfig;
  let showLength;
  let str;
  let visibleRanges;
  let width;
  ({ handlerOffset, index } = animationStyle);
  animationStyle = animationStyle.animationStyle;
  ({ children, visibleRanges } = animationStyle);
  const obj = _mod10232;
  const props = obj.useGlobalState().props;
  ({ loop, dataLength, width, height, customConfig, modeConfig } = props);
  let tmp3 = width;
  const mode = props.mode;
  if (props.vertical) {
    tmp3 = height;
  }
  height = tmp3;
  let obj2 = { handlerOffset, index, size: tmp3, dataLength, loop };
  const tmp4 = typeof customConfig === "function" ? customConfig() : {};
  const merged = Object.assign(tmp4);
  if ("horizontal-stack" === mode) {
    const obj3 = { handlerOffset, index, size: tmp3, dataLength, loop, type: str, viewCount: showLength };
    str = "positive";
    showLength = modeConfig.showLength;
    if ("right" === modeConfig.snapDirection) {
      str = "negative";
    }
    obj2 = obj3;
  }
  const tmpResult = _mod10250;
  const offsetX = tmpResult.useOffsetX(obj2, visibleRanges);
  const fn = function k() {
    return offsetX.value / height;
  };
  fn.__closure = { x: offsetX, size: tmp3 };
  fn.__workletHash = 15967503186804;
  fn.__initData = __initData;
  const items = [offsetX, tmp3];
  const tmpResult3 = _mod1638;
  const derivedValue = tmpResult3.useDerivedValue(fn, items);
  const tmpResult4 = _mod1638;
  class E {
    constructor() {
      return animationStyle(offsetX.value / height, index);
    }
  }
  E.__closure = { animationStyle, x: offsetX, size: tmp3, index };
  E.__workletHash = 4560717846650;
  E.__initData = __initData2;
  const items1 = [animationStyle, index, offsetX, tmp3];
  const animatedStyle = tmpResult4.useAnimatedStyle(E, items1);
  const View = _modDef1638.View;
  const tmp9 = jsx;
  if (!width) {
    width = "100%";
  }
  size = { width, height, position: "absolute", pointerEvents: "box-none" };
  if (!height) {
    height = "100%";
  }
  const obj4 = { style: items2, testID: "__CAROUSEL_ITEM_" + index + "__", children: children({ animationValue: derivedValue }) };
  items2 = [size, animatedStyle];
  return tmp9(View, obj4);
};
