// Module ID: 6164
// Function ID: 6165
// Name: GestureDetector
// Dependencies: [21, 6165, 6167, 6168, 6170, 6202]
// Exports: GestureDetector

// Module 6164 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod6165 from "module_6165" /* 6165 */;
import ComposedGesture from "ComposedGesture" /* 6167 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 6168 */;

const jsx = Fragment.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  const obj = _mod6165;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = tmp(6202).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(6170).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
};
