// Module ID: 19820
// Function ID: 19821
// Name: useMeasureDockGlowOffset
// Dependencies: [32, 19, 2]
// Exports: default, getDockGlowHotSpot

// Module 19820 (useMeasureDockGlowOffset)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useMeasureDockGlowOffset.tsx");

export default function useMeasureDockGlowOffset() {
  let closure_2;
  let first;
  const ref = react.useRef(null);
  [first, closure_2] = react.useState(null);
  const items = [first];
  const callback = react.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    closure_2((arg0) => {
      size = arg0;
      let width;
      if (arg0 != null) {
        width = size.width;
      }
      if (width !== layout.width) {
        const size1 = { width: null, height: null };
        ({ width: obj.width, height: obj.height } = layout);
        size = size1;
      }
      return size;
    });
  }, []);
  const obj = {
    dockRef: ref,
    handleDockLayout: callback,
    measureGlowOffset: react.useMemo(() => {
      let styles;
      let fn = null;
      if (null != first) {
        fn = (measureLayout, arg1) => {
          let closure_0;
          const current = arg1.current;
          if (null != current) {
            measureLayout.measureLayout(current, (arg0, arg1, width, height) => {
              const diff = styles.width / 2 - (arg0 + width / 2);
              size = { width, height, dx: diff, dy: styles.height + 8 - (arg1 + height / 2), offCenter: Math.min(Math.abs(diff) / (styles.width / 2), 1) };
              closure_0(size);
            });
          }
        };
      }
      return fn;
    }, items)
  };
  return obj;
};
export function getDockGlowHotSpot(width) {
  const point = { x: width.width / 2, y: width.height + 8 };
  return point;
}
