// Module ID: 15701
// Function ID: 15702
// Name: useHappeningNowScrollBehavior
// Dependencies: [32, 19, 2]
// Exports: default, useHappeningNowScrollSnapping

// Module 15701 (useHappeningNowScrollBehavior)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowScrollBehavior.tsx");

export default function useHappeningNowScrollBehavior(arg0, arg1) {
  let closure_2;
  let first;
  let closure_0 = arg0;
  let closure_1 = arg1;
  [first, closure_2] = react.useState(false);
  const items = [arg0, arg1];
  const items1 = [
    react.useCallback((nativeEvent) => {
      closure_2(nativeEvent.nativeEvent.contentOffset.x < closure_0);
      closure_1(nativeEvent.nativeEvent.contentOffset.x, nativeEvent.nativeEvent.layoutMeasurement.width);
    }, items),
    first
  ];
  return items1;
};
export const useHappeningNowScrollSnapping = function useHappeningNowScrollSnapping(listRef) {
  const current = listRef.current;
  let num;
  if (current != null) {
    const props = current.props;
    if (props != null) {
      const data = props.data;
      if (data != null) {
        num = data.length;
      }
    }
  }
  if (num == null) {
    num = 0;
  }
  const items = [];
  let num2 = 0;
  let num3 = 0;
  if (0 < num) {
    do {
      let current2 = listRef.current;
      let num4;
      if (current2 != null) {
        let layout = current2.getLayout(num2);
        if (layout != null) {
          num4 = layout.width;
        }
      }
      if (num4 == null) {
        num4 = 0;
      }
      let arr = items.push(num3);
      num3 = num3 + num4;
      num2 = num2 + 1;
    } while (num2 < num);
  }
  return items;
};
