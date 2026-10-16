// Module ID: 6576
// Function ID: 6577
// Name: GestureDetector
// Dependencies: [21, 6577, 6579, 6580, 6582, 6614]
// Exports: GestureDetector

// Module 6576 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod6577 from "module_6577" /* 6577 */;
import ComposedGesture from "ComposedGesture" /* 6579 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 6580 */;

const jsx = Fragment.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  const obj = _mod6577;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = tmp(6614).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(6582).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
};
