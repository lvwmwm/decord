// Module ID: 6629
// Function ID: 6630
// Name: GestureDetector
// Dependencies: [21, 6630, 6632, 6633, 6635, 6667]
// Exports: GestureDetector

// Module 6629 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod6630 from "module_6630" /* 6630 */;
import ComposedGesture from "ComposedGesture" /* 6632 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 6633 */;

const jsx = Fragment.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  const obj = _mod6630;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = tmp(6667).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(6635).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
};
