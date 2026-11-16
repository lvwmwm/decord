// Module ID: 9113
// Function ID: 9114
// Name: CollapsibleFloatingActionButtonState
// Dependencies: [19, 1652, 2]
// Exports: useCollapsibleFloatingActionButtonScroll, useCollapsibleFloatingActionButtonState

// Module 9113 (CollapsibleFloatingActionButtonState)
import _mod1652 from "module_1652" /* 1652 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let _Math, diff, nativeEvent, num2, num3, result1, result2, set, tmp11, y;

let closure_3 = { code: "(function CollapsibleFloatingActionButtonStateNativeTsx1({nativeEvent:nativeEvent}){let[initialScrollStart,previousOffset,MINIMUM_SCROLL_DISTANCE_TO_CLOSE,collapseText,SCROLL_OFFSET_THRESHOLD]=this.__closure;if(nativeEvent==null)return;const{contentOffset:{y:currentOffset},contentSize:{height:contentHeight},layoutMeasurement:{height:layoutHeight}}=nativeEvent;if(currentOffset<initialScrollStart)return;const contentHeightAsOffset=currentOffset+layoutHeight;if(contentHeightAsOffset>contentHeight)return;const offsetChanged=currentOffset-previousOffset.get();if(currentOffset<MINIMUM_SCROLL_DISTANCE_TO_CLOSE){collapseText.set(0);}else{if(Math.abs(offsetChanged)>SCROLL_OFFSET_THRESHOLD){collapseText.set(offsetChanged<0?0:1);}}previousOffset.set(currentOffset);})" };
let result = size.fileFinishedImporting("design/components/experimental/Button/native/CollapsibleFloatingActionButtonState.native.tsx");

export function useCollapsibleFloatingActionButtonState() {
  let obj2;
  const obj = { collapseText: obj2.useSharedValue(0) };
  obj2 = _mod1652;
  return obj;
}
export function useCollapsibleFloatingActionButtonScroll(collapsibleFloatingActionButtonState, UNDETERMINED) {
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  const collapseText = collapsibleFloatingActionButtonState.collapseText;
  let num = UNDETERMINED;
  if (UNDETERMINED === undefined) {
    num = 0;
  }
  let obj = _mod1652;
  const sharedValue = obj.useSharedValue(num);
  const items = [closure_3, num, sharedValue, 10, collapseText, 10];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
  class CollapsibleFloatingActionButtonStateNativeTsx1 {
    constructor(arg0) {
      nativeEvent = collapsibleFloatingActionButtonState.nativeEvent;
      if (null != nativeEvent) {
        y = nativeEvent.contentOffset.y;
        tmp11 = closure_0;
        if (y >= closure_0) {
          if (y + nativeEvent.layoutMeasurement.height <= tmp10) {
            obj = closure_1;
            diff = y - closure_1.get();
            tmp2 = closure_2;
            if (y < closure_2) {
              tmp7 = closure_3;
              num3 = 0;
              result = closure_3.set(0);
            } else {
              tmp3 = globalThis;
              _Math = Math;
              tmp4 = closure_4;
              if (Math.abs(diff) > closure_4) {
                num = 1;
                num2 = 0;
                tmp5 = closure_3;
                set = closure_3.set;
                if (diff < 0) {
                  num = 0;
                }
                result1 = set(num);
              }
            }
            result2 = obj.set(y);
          }
        }
      }
      return;
    }
  }
  const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7];
  CollapsibleFloatingActionButtonStateNativeTsx1.__closure = items1;
  CollapsibleFloatingActionButtonStateNativeTsx1.__workletHash = 13314443291347;
  CollapsibleFloatingActionButtonStateNativeTsx1.__initData = tmp2;
  const items2 = [num, sharedValue, collapseText];
  return react.useCallback(CollapsibleFloatingActionButtonStateNativeTsx1, items2);
}
