// Module ID: 8380
// Function ID: 66754
// Name: useCollapsibleFloatingActionButtonState
// Dependencies: [31, 3991, 2]
// Exports: useCollapsibleFloatingActionButtonScroll, useCollapsibleFloatingActionButtonState

// Module 8380 (useCollapsibleFloatingActionButtonState)
import result from "result";

const require = arg1;
let closure_3 = { code: "function CollapsibleFloatingActionButtonStateNativeTsx1({nativeEvent:nativeEvent}){const{initialScrollStart,previousOffset,MINIMUM_SCROLL_DISTANCE_TO_CLOSE,collapseText,SCROLL_OFFSET_THRESHOLD}=this.__closure;if(nativeEvent==null)return;const{contentOffset:{y:currentOffset},contentSize:{height:contentHeight},layoutMeasurement:{height:layoutHeight}}=nativeEvent;if(currentOffset<initialScrollStart)return;const contentHeightAsOffset=currentOffset+layoutHeight;if(contentHeightAsOffset>contentHeight)return;const offsetChanged=currentOffset-previousOffset.get();if(currentOffset<MINIMUM_SCROLL_DISTANCE_TO_CLOSE){collapseText.set(0);}else{if(Math.abs(offsetChanged)>SCROLL_OFFSET_THRESHOLD){collapseText.set(offsetChanged<0?0:1);}}previousOffset.set(currentOffset);}" };
let result = require("set").fileFinishedImporting("design/components/experimental/Button/native/CollapsibleFloatingActionButtonState.native.tsx");

export const useCollapsibleFloatingActionButtonState = function useCollapsibleFloatingActionButtonState() {
  const obj = { collapseText: require(3991).useSharedValue(0) };
  return obj;
};
export const useCollapsibleFloatingActionButtonScroll = function useCollapsibleFloatingActionButtonScroll(collapsibleFloatingActionButtonState, UNDETERMINED) {
  let num = UNDETERMINED;
  const collapseText = collapsibleFloatingActionButtonState.collapseText;
  if (UNDETERMINED === undefined) {
    num = 0;
  }
  let sharedValue;
  let obj = collapseText(num[1]);
  sharedValue = obj.useSharedValue(num);
  const fn = function s(nativeEvent) {
    nativeEvent = nativeEvent.nativeEvent;
    if (null != nativeEvent) {
      const y = nativeEvent.contentOffset.y;
      if (y >= num) {
        if (y + nativeEvent.layoutMeasurement.height <= tmp10) {
          const diff = y - sharedValue.get();
          if (y < 10) {
            const result = collapseText.set(0);
          } else {
            const _Math = Math;
            if (Math.abs(diff) > 10) {
              let num2 = 1;
              if (diff < 0) {
                num2 = 0;
              }
              const result1 = collapseText.set(num2);
            }
          }
          const result2 = sharedValue.set(y);
        }
      }
    }
  };
  obj = { initialScrollStart: num, previousOffset: sharedValue, MINIMUM_SCROLL_DISTANCE_TO_CLOSE: 10, collapseText, SCROLL_OFFSET_THRESHOLD: 10 };
  fn.__closure = obj;
  fn.__workletHash = 10435259247914;
  fn.__initData = closure_3;
  const items = [num, sharedValue, collapseText];
  return sharedValue.useCallback(fn, items);
};
