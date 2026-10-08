// Module ID: 6343
// Function ID: 6344
// Name: GestureDetector
// Dependencies: [21, 6344, 6346, 6347, 6349, 6381]
// Exports: GestureDetector

// Module 6343 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod6344 from "module_6344" /* 6344 */;
import ComposedGesture from "ComposedGesture" /* 6346 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 6347 */;

const jsx = Fragment.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  const obj = _mod6344;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = tmp(6381).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(6349).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
};
