// Module ID: 10786
// Function ID: 10787
// Name: ItemLayout
// Dependencies: [19, 21, 10769, 10787, 1652]
// Exports: ItemLayout

// Module 10786 (ItemLayout)
import Fragment from "Fragment" /* 21 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod10769 from "module_10769" /* 10769 */;
import useOffsetX from "useOffsetX" /* 10787 */;
import react from "react" /* 19 */;

const _modDef1652 = _mod1652;

const jsx = Fragment.jsx;
let closure_4 = { code: "(function pnpm_ItemLayoutTsx1(){let[x,size]=this.__closure;return x.value/size;})" };
let closure_5 = { code: "(function pnpm_ItemLayoutTsx2(){let[animationStyle,x,size,index]=this.__closure;return animationStyle(x.value/size,index);})" };

export const ItemLayout = (arg0) => {
  let animationStyle;
  let children;
  let customConfig;
  let dataLength;
  let handlerOffset;
  let height;
  let index;
  let items6;
  let loop;
  let modeConfig;
  let str;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp7;
  let tmp8;
  let tmp9;
  let visibleRanges;
  let width;
  ({ handlerOffset, index, animationStyle } = arg0);
  ({ children, visibleRanges } = arg0);
  const obj = _mod10769;
  const props = obj.useGlobalState().props;
  ({ loop, dataLength, width, height, customConfig, modeConfig } = props);
  let tmp3 = width;
  const mode = props.mode;
  if (props.vertical) {
    tmp3 = height;
  }
  let obj2 = { handlerOffset, index, size: tmp3, dataLength, loop };
  const tmp4 = typeof customConfig === "function" ? customConfig() : {};
  const merged = Object.assign(tmp4);
  if ("horizontal-stack" === mode) {
    const obj3 = { handlerOffset, index, size: tmp3, dataLength, loop, type: str, viewCount: modeConfig.showLength };
    str = "positive";
    if ("right" === modeConfig.snapDirection) {
      str = "negative";
    }
    obj2 = obj3;
  }
  const tmpResult = useOffsetX;
  const offsetX = tmpResult.useOffsetX(obj2, visibleRanges);
  const items = [closure_4, offsetX, tmp3];
  [tmp7, tmp8, tmp9] = items;
  function pnpm_ItemLayoutTsx1() {
    return _undefined.value / c1;
  }
  const items1 = [tmp8, tmp9];
  pnpm_ItemLayoutTsx1.__closure = items1;
  pnpm_ItemLayoutTsx1.__workletHash = 1131903372333;
  pnpm_ItemLayoutTsx1.__initData = tmp7;
  const items2 = [offsetX, tmp3];
  const tmpResult3 = _mod1652;
  const derivedValue = tmpResult3.useDerivedValue(pnpm_ItemLayoutTsx1, items2);
  const items3 = [closure_5, animationStyle, offsetX, tmp3, index];
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp11, tmp12, tmp13, tmp14, tmp15] = items3;
  function pnpm_ItemLayoutTsx2() {
    return _undefined(_undefined2.value / c2, c3);
  }
  const items4 = [tmp12, tmp13, tmp14, tmp15];
  pnpm_ItemLayoutTsx2.__closure = items4;
  pnpm_ItemLayoutTsx2.__workletHash = 4847228470595;
  pnpm_ItemLayoutTsx2.__initData = tmp11;
  const items5 = [animationStyle, index, offsetX, tmp3];
  const tmpResult4 = _mod1652;
  const animatedStyle = tmpResult4.useAnimatedStyle(pnpm_ItemLayoutTsx2, items5);
  const View = _modDef1652.View;
  const tmp17 = jsx;
  if (!width) {
    width = "100%";
  }
  size = { width, height, position: "absolute", pointerEvents: "box-none" };
  if (!height) {
    height = "100%";
  }
  const obj4 = { style: items6, testID: "__CAROUSEL_ITEM_" + index + "__", children: children({ animationValue: derivedValue }) };
  items6 = [size, animatedStyle];
  return tmp17(View, obj4);
};
