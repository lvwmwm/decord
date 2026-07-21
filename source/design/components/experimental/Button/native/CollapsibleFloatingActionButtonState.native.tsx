// Module ID: 8373
// Function ID: 66705
// Name: useCollapsibleFloatingActionButtonState
// Dependencies: []
// Exports: useCollapsibleFloatingActionButtonScroll, useCollapsibleFloatingActionButtonState

// Module 8373 (useCollapsibleFloatingActionButtonState)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = { code: "function CollapsibleFloatingActionButtonStateNativeTsx1({nativeEvent:nativeEvent}){const{initialScrollStart,previousOffset,MINIMUM_SCROLL_DISTANCE_TO_CLOSE,collapseText,SCROLL_OFFSET_THRESHOLD}=this.__closure;if(nativeEvent==null)return;const{contentOffset:{y:currentOffset},contentSize:{height:contentHeight},layoutMeasurement:{height:layoutHeight}}=nativeEvent;if(currentOffset<initialScrollStart)return;const contentHeightAsOffset=currentOffset+layoutHeight;if(contentHeightAsOffset>contentHeight)return;const offsetChanged=currentOffset-previousOffset.get();if(currentOffset<MINIMUM_SCROLL_DISTANCE_TO_CLOSE){collapseText.set(0);}else{if(Math.abs(offsetChanged)>SCROLL_OFFSET_THRESHOLD){collapseText.set(offsetChanged<0?0:1);}}previousOffset.set(currentOffset);}" };
const result = arg1(dependencyMap[2]).fileFinishedImporting("design/components/experimental/Button/native/CollapsibleFloatingActionButtonState.native.tsx");

export const useCollapsibleFloatingActionButtonState = function useCollapsibleFloatingActionButtonState() {
  const obj = { collapseText: arg1(dependencyMap[1]).useSharedValue(0) };
  return obj;
};
export const useCollapsibleFloatingActionButtonScroll = function useCollapsibleFloatingActionButtonScroll(collapsibleFloatingActionButtonState, UNDETERMINED) {
  let num = UNDETERMINED;
  const collapseText = collapsibleFloatingActionButtonState.collapseText;
  UNDETERMINED = collapseText;
  if (UNDETERMINED === undefined) {
    num = 0;
  }
  const dependencyMap = num;
  let React;
  let obj = UNDETERMINED(dependencyMap[1]);
  const sharedValue = obj.useSharedValue(num);
  React = sharedValue;
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
  return React.useCallback(fn, items);
};
