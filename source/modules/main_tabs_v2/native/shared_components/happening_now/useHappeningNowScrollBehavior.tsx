// Module ID: 14931
// Function ID: 113839
// Name: useHappeningNowScrollBehavior
// Dependencies: [57, 31, 2]
// Exports: default, useHappeningNowScrollSnapping

// Module 14931 (useHappeningNowScrollBehavior)
import _slicedToArray from "_slicedToArray";
import result from "result";

const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowScrollBehavior.tsx");

export default function useHappeningNowScrollBehavior(arg0, arg1) {
  const callback = arg0;
  const React = arg1;
  const tmp = callback(React.useState(false), 2);
  let closure_2 = tmp[1];
  const items = [arg0, arg1];
  const items1 = [
    React.useCallback((nativeEvent) => {
      callback2(nativeEvent.nativeEvent.contentOffset.x < _slicedToArray);
      callback(nativeEvent.nativeEvent.contentOffset.x, nativeEvent.nativeEvent.layoutMeasurement.width);
    }, items),
    tmp[0]
  ];
  return items1;
};
export const useHappeningNowScrollSnapping = function useHappeningNowScrollSnapping(listRef) {
  const current = listRef.current;
  let length;
  if (null != current) {
    const props = current.props;
    if (null != props) {
      const data = props.data;
      if (null != data) {
        length = data.length;
      }
    }
  }
  let num = 0;
  if (null != length) {
    num = length;
  }
  const items = [];
  let num2 = 0;
  for (let num3 = 0; num3 < num; num3 = num3 + 1) {
    let current2 = listRef.current;
    let width;
    if (null != current2) {
      let layout = current2.getLayout(num3);
      if (null != layout) {
        width = layout.width;
      }
    }
    let num4 = 0;
    if (null != width) {
      num4 = width;
    }
    let arr = items.push(num2);
    num2 = num2 + num4;
  }
  return items;
};
