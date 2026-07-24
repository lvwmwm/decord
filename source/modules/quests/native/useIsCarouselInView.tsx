// Module ID: 14029
// Function ID: 107329
// Name: useIsCarouselInView
// Dependencies: [57, 31, 1450, 2]
// Exports: default

// Module 14029 (useIsCarouselInView)
import _slicedToArray from "_slicedToArray";
import result from "result";

const result = require("useWindowDimensions").fileFinishedImporting("modules/quests/native/useIsCarouselInView.tsx");

export default function useIsCarouselInView() {
  const containerRef = React.useRef(null);
  height = containerRef(height[2])().height;
  const callback = React.useRef(height);
  const items = [height];
  const effect = React.useEffect(() => {
    _slicedToArray.current = height;
  }, items);
  const tmp3 = callback(React.useState(true), 2);
  const isInView = tmp3[0];
  React = tmp3[1];
  let closure_4 = React.useRef(isInView);
  const effect1 = React.useEffect(() => {
    const interval = setInterval(() => {
      if (null != ref.current) {
        const current = ref.current;
        current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
          const bound = Math.min(arg5 + arg3, outer2_2.current);
          let tmp2 = arg3 > 0;
          if (tmp2) {
            tmp2 = Math.max(0, bound - Math.max(arg5, 0)) / arg3 >= 0.5;
          }
          if (tmp2 !== outer2_4.current) {
            outer2_4.current = tmp2;
            outer2_3(tmp2);
          }
        });
      }
    }, 1000);
    return () => clearInterval(closure_0);
  }, []);
  return { containerRef, isInView };
};
