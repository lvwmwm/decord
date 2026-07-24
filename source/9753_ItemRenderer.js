// Module ID: 9753
// Function ID: 75785
// Name: ItemRenderer
// Dependencies: [57, 31, 33, 9754, 1582, 9731, 9755]
// Exports: ItemRenderer

// Module 9753 (ItemRenderer)
import _slicedToArray from "_slicedToArray";
import result from "result";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, Fragment: closure_5 } = jsxProd);
let closure_6 = { code: "function pnpm_ItemRendererTsx1(){const{visibleRanges}=this.__closure;return visibleRanges.value;}" };
let closure_7 = { code: "function pnpm_ItemRendererTsx2(ranges){const{runOnJS,setDisplayedItems}=this.__closure;return runOnJS(setDisplayedItems)(ranges);}" };

export const ItemRenderer = function ItemRenderer(arg0) {
  let result;
  let closure_4;
  let closure_5;
  let closure_6;
  let data;
  let dataLength;
  let dependencyMap;
  let handlerOffset;
  let loop;
  let require;
  let size;
  let windowSize;
  ({ data, offsetX: require, rawDataLength: dependencyMap, loop } = arg0);
  ({ autoFillData: result, layoutConfig: closure_4, renderItem: closure_5, customAnimation: closure_6 } = arg0);
  ({ size, windowSize, handlerOffset, dataLength } = arg0);
  let obj = require(9754) /* isArraysEqual */;
  const visibleRanges = obj.useVisibleRanges({ total: dataLength, viewSize: size, translation: handlerOffset, windowSize, loop });
  let tmp2 = null;
  let tmp3 = loop(React.useState(null), 2);
  const first = tmp3[0];
  let closure_9 = tmp5;
  /* worklet (recovered source) */ function pnpm_ItemRendererTsx1(){const{visibleRanges}=this.__closure;return visibleRanges.value;}
  pnpm_ItemRendererTsx1.__closure = { visibleRanges };
  pnpm_ItemRendererTsx1.__workletHash = 13618421293040;
  pnpm_ItemRendererTsx1.__initData = closure_6;
  /* worklet (recovered source) */ function pnpm_ItemRendererTsx2(ranges){const{runOnJS,setDisplayedItems}=this.__closure;return runOnJS(setDisplayedItems)(ranges);}
  obj = { runOnJS: require(1582) /* cancelAnimation */.runOnJS, setDisplayedItems: tmp5 };
  pnpm_ItemRendererTsx2.__closure = obj;
  pnpm_ItemRendererTsx2.__workletHash = 13763650073050;
  pnpm_ItemRendererTsx2.__initData = visibleRanges;
  const items = [visibleRanges];
  const animatedReaction = require(1582) /* cancelAnimation */.useAnimatedReaction(pnpm_ItemRendererTsx1, pnpm_ItemRendererTsx2, items);
  if (first) {
    obj = {
      children: data.map((arg0, index) => {
          let negativeRange;
          let positiveRange;
          let closure_0 = arg0;
          let obj = outer1_0(outer1_1[5]);
          obj = { index, dataLength: closure_1, loop, autoFillData: result };
          closure_1 = obj.computedRealIndexWithAutoFillData(obj);
          ({ negativeRange, positiveRange } = first);
          if (index < negativeRange[0]) {
            let tmp = null;
            if (index >= positiveRange[0]) {
              tmp = null;
            }
            return tmp;
          }
          obj = { index, handlerOffset: closure_0, visibleRanges };
          let tmp3 = closure_6;
          if (!closure_6) {
            tmp3 = closure_4;
          }
          obj.animationStyle = tmp3;
          obj.children = function children(animationValue) {
            return outer1_5({ item: closure_0, index: closure_1, animationValue: animationValue.animationValue });
          };
          tmp = outer1_4(outer1_0(outer1_1[6]).ItemLayout, obj, index);
        })
    };
    tmp2 = callback(closure_5, obj);
  }
  return tmp2;
};
