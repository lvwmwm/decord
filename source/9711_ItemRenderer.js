// Module ID: 9711
// Function ID: 75508
// Name: ItemRenderer
// Dependencies: []
// Exports: ItemRenderer

// Module 9711 (ItemRenderer)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ jsx: closure_4, Fragment: closure_5 } = arg1(dependencyMap[2]));
let closure_6 = { code: "function pnpm_ItemRendererTsx1(){const{visibleRanges}=this.__closure;return visibleRanges.value;}" };
let closure_7 = { code: "function pnpm_ItemRendererTsx2(ranges){const{runOnJS,setDisplayedItems}=this.__closure;return runOnJS(setDisplayedItems)(ranges);}" };

export const ItemRenderer = function ItemRenderer(arg0) {
  let data;
  let dataLength;
  let handlerOffset;
  let loop;
  let size;
  let windowSize;
  ({ data, offsetX: closure_0, rawDataLength: closure_1, loop } = arg0);
  const callback = loop;
  ({ autoFillData: closure_3, layoutConfig: closure_4, renderItem: closure_5, customAnimation: closure_6 } = arg0);
  ({ size, windowSize, handlerOffset, dataLength } = arg0);
  let obj = arg1(dependencyMap[3]);
  const visibleRanges = obj.useVisibleRanges({ total: dataLength, viewSize: size, translation: handlerOffset, windowSize, loop });
  let closure_7 = visibleRanges;
  let tmp2 = null;
  const tmp3 = callback(React.useState(null), 2);
  const first = tmp3[0];
  const tmp5 = tmp3[1];
  /* worklet (recovered source) */ function pnpm_ItemRendererTsx1(){const{visibleRanges}=this.__closure;return visibleRanges.value;}
  pnpm_ItemRendererTsx1.__closure = { visibleRanges };
  pnpm_ItemRendererTsx1.__workletHash = 13618421293040;
  pnpm_ItemRendererTsx1.__initData = closure_6;
  /* worklet (recovered source) */ function pnpm_ItemRendererTsx2(ranges){const{runOnJS,setDisplayedItems}=this.__closure;return runOnJS(setDisplayedItems)(ranges);}
  obj = { runOnJS: arg1(dependencyMap[4]).runOnJS, setDisplayedItems: tmp5 };
  pnpm_ItemRendererTsx2.__closure = obj;
  pnpm_ItemRendererTsx2.__workletHash = 13763650073050;
  pnpm_ItemRendererTsx2.__initData = closure_7;
  const items = [visibleRanges];
  const animatedReaction = arg1(dependencyMap[4]).useAnimatedReaction(pnpm_ItemRendererTsx1, pnpm_ItemRendererTsx2, items);
  if (first) {
    obj = {
      children: data.map((arg0, index) => {
          let negativeRange;
          let positiveRange;
          let obj = arg0(closure_1[5]);
          obj = { index, dataLength: closure_1, loop, autoFillData: closure_3 };
          closure_1 = obj.computedRealIndexWithAutoFillData(obj);
          ({ negativeRange, positiveRange } = first);
          if (index < negativeRange[0]) {
            let tmp = null;
            if (index >= positiveRange[0]) {
              tmp = null;
            }
            return tmp;
          }
          obj = { index, handlerOffset: arg0, visibleRanges };
          let tmp3 = closure_6;
          if (!closure_6) {
            tmp3 = closure_4;
          }
          obj.animationStyle = tmp3;
          obj.children = function children(animationValue) {
            return callback({ item: animationValue, index: closure_1, animationValue: animationValue.animationValue });
          };
          tmp = closure_4(arg0(closure_1[6]).ItemLayout, obj, index);
        })
    };
    tmp2 = callback2(closure_5, obj);
  }
  return tmp2;
};
