// Module ID: 8378
// Function ID: 8379
// Name: CollapsibleFloatingActionButtonState
// Dependencies: [19, 4566, 2]
// Exports: useCollapsibleFloatingActionButtonScroll, useCollapsibleFloatingActionButtonState

// Module 8378 (CollapsibleFloatingActionButtonState)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

const __initData = { code: "function CollapsibleFloatingActionButtonStateNativeTsx1({nativeEvent:nativeEvent}){const{initialScrollStart,previousOffset,MINIMUM_SCROLL_DISTANCE_TO_CLOSE,collapseText,SCROLL_OFFSET_THRESHOLD}=this.__closure;if(nativeEvent==null)return;const{contentOffset:{y:currentOffset},contentSize:{height:contentHeight},layoutMeasurement:{height:layoutHeight}}=nativeEvent;if(currentOffset<initialScrollStart)return;const contentHeightAsOffset=currentOffset+layoutHeight;if(contentHeightAsOffset>contentHeight)return;const offsetChanged=currentOffset-previousOffset.get();if(currentOffset<MINIMUM_SCROLL_DISTANCE_TO_CLOSE){collapseText.set(0);}else{if(Math.abs(offsetChanged)>SCROLL_OFFSET_THRESHOLD){collapseText.set(offsetChanged<0?0:1);}}previousOffset.set(currentOffset);}" };
let result = size.fileFinishedImporting("design/components/experimental/Button/native/CollapsibleFloatingActionButtonState.native.tsx");

export const useCollapsibleFloatingActionButtonState = function useCollapsibleFloatingActionButtonState() {
  let obj2;
  const obj = { collapseText: obj2.useSharedValue(0) };
  obj2 = ReanimatedRexport;
  return obj;
};
export const useCollapsibleFloatingActionButtonScroll = function useCollapsibleFloatingActionButtonScroll(collapsibleFloatingActionButtonState, UNDETERMINED) {
  const collapseText = collapsibleFloatingActionButtonState.collapseText;
  let num = UNDETERMINED;
  if (UNDETERMINED === undefined) {
    num = 0;
  }
  let obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(num);
  const fn = function s(nativeEvent) {
    nativeEvent = nativeEvent.nativeEvent;
    if (null != nativeEvent) {
      const y = nativeEvent.contentOffset.y;
      if (y >= num) {
        if (y + nativeEvent.layoutMeasurement.height <= tmp8) {
          const diff = y - sharedValue.get();
          const obj = sharedValue;
          if (y < 10) {
            const result = collapseText.set(0);
          } else {
            const _Math = Math;
            if (Math.abs(diff) > 10) {
              let num2 = 1;
              set = collapseText.set;
              if (diff < 0) {
                num2 = 0;
              }
              const result1 = set(num2);
            }
          }
          const result2 = obj.set(y);
        }
      }
    }
  };
  fn.__closure = { initialScrollStart: num, previousOffset: sharedValue, MINIMUM_SCROLL_DISTANCE_TO_CLOSE: 10, collapseText, SCROLL_OFFSET_THRESHOLD: 10 };
  fn.__workletHash = 10435259247914;
  fn.__initData = __initData;
  const items = [num, sharedValue, collapseText];
  return react.useCallback(fn, items);
};
