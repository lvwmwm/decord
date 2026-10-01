// Module ID: 14613
// Function ID: 14614
// Name: useIsCarouselInView
// Dependencies: [32, 19, 1479, 2]
// Exports: default

// Module 14613 (useIsCarouselInView)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/useIsCarouselInView.tsx");

export default function useIsCarouselInView() {
  let closure_129_3;
  let tmp4;
  const containerRef = react.useRef(null);
  const height = useWindowDimensionsDefault().height;
  let closure_2 = react.useRef(height);
  const items = [height];
  const effect = react.useEffect(() => {
    closure_2.current = height;
  }, items);
  [tmp4, closure_129_3] = _slicedToArray(react.useState(true), 2);
  const tmp3 = _slicedToArray(react.useState(true), 2);
  let closure_4 = react.useRef(isInView);
  const effect1 = react.useEffect(() => {
    const ref = setInterval(() => {
      let ref2;
      if (null != ref.current) {
        const current = ref.current;
        current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
          const bound = Math.min(arg5 + arg3, ref.current);
          const tmp2 = arg3 > 0 && max(0, bound - Math.max(arg5, 0)) / arg3 >= 0.5;
          if (tmp2 !== ref2.current) {
            ref2.current = tmp2;
            closure_1_3(tmp2);
          }
        });
      }
    }, 1000);
    return () => clearInterval(ref);
  }, []);
  return { containerRef, isInView };
};
