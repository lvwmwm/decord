// Module ID: 11654
// Function ID: 11655
// Name: ItemRenderer
// Dependencies: [32, 19, 21, 11655, 1652, 11632, 11656]
// Exports: ItemRenderer

// Module 11654 (ItemRenderer)
import _mod1652 from "module_1652" /* 1652 */;
import convertToSharedIndex from "convertToSharedIndex" /* 11632 */;
import useVisibleRanges from "useVisibleRanges" /* 11655 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, Fragment: hasOwnProperty } = Fragment);
let closure_6 = { code: "(function pnpm_ItemRendererTsx1(){let[visibleRanges]=this.__closure;return visibleRanges.value;})" };
let closure_7 = { code: "(function pnpm_ItemRendererTsx2(ranges){let[runOnJS,setDisplayedItems]=this.__closure;return runOnJS(setDisplayedItems)(ranges);})" };

export const ItemRenderer = (arg0) => {
  let autoFillData;
  let closure_4;
  let closure_5;
  let data;
  let dataLength;
  let handlerOffset;
  let loop;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp8;
  let tmp9;
  let windowSize;
  ({ data, offsetX: require, rawDataLength: dependencyMap, loop } = arg0);
  ({ autoFillData: react, layoutConfig: closure_4, renderItem: closure_5, customAnimation: closure_6 } = arg0);
  ({ size, windowSize, handlerOffset, dataLength } = arg0);
  let tmp = require;
  let tmp2 = dependencyMap;
  let obj = useVisibleRanges;
  const visibleRanges = obj.useVisibleRanges({ total: dataLength, viewSize: size, translation: handlerOffset, windowSize, loop });
  let tmp4 = loop(react.useState(null), 2);
  const first = tmp4[0];
  const items = [closure_6, visibleRanges];
  const tmp6 = tmp4[1];
  [tmp8, tmp9] = items;
  function pnpm_ItemRendererTsx1() {
    return _undefined.value;
  }
  const items1 = [tmp9];
  pnpm_ItemRendererTsx1.__closure = items1;
  pnpm_ItemRendererTsx1.__workletHash = 4233123637993;
  pnpm_ItemRendererTsx1.__initData = tmp8;
  const items2 = [visibleRanges, , ];
  const useAnimatedReaction = _mod1652.useAnimatedReaction;
  _mod1652;
  items2[1] = _mod1652.runOnJS;
  items2[2] = tmp6;
  let c0;
  let c1;
  [tmp10, tmp11, tmp12] = items2;
  function pnpm_ItemRendererTsx2(arg0) {
    return _undefined(c1)(arg0);
  }
  const items3 = [tmp11, tmp12];
  pnpm_ItemRendererTsx2.__closure = items3;
  pnpm_ItemRendererTsx2.__workletHash = 12320983525411;
  pnpm_ItemRendererTsx2.__initData = tmp10;
  const items4 = [visibleRanges];
  const animatedReaction = useAnimatedReaction(pnpm_ItemRendererTsx1, pnpm_ItemRendererTsx2, items4);
  let tmp14 = null;
  if (first) {
    let obj2 = {
      children: data.map((item, index) => {
          let negativeRange;
          let positiveRange;
          let tmp5;
          require = item;
          let obj = convertToSharedIndex;
          const obj2 = { index, dataLength: dependencyMap, loop, autoFillData };
          const tmp2 = dependencyMap;
          dependencyMap = obj.computedRealIndexWithAutoFillData(obj2);
          ({ negativeRange, positiveRange } = first);
          const tmp = require;
          if (index < negativeRange[0]) {
            let tmp4Result = null;
            if (index >= positiveRange[0]) {
              tmp4Result = null;
            }
            return tmp4Result;
          }
          const obj3 = {
            index,
            handlerOffset: require,
            visibleRanges,
            animationStyle: tmp5,
            children(animationValue) {
              const obj = { item, index, animationValue: animationValue.animationValue };
              return closure_5(obj);
            }
          };
          tmp5 = closure_6;
          const ItemLayout = tmp(tmp2[6]).ItemLayout;
          const tmp4 = closure_4;
          if (!closure_6) {
            tmp5 = closure_4;
          }
          tmp4Result = tmp4(ItemLayout, obj3, index);
        })
    };
    tmp14 = closure_4(closure_5, obj2);
  }
  return tmp14;
};
