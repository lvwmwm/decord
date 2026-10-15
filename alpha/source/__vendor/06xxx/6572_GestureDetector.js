// Module ID: 6572
// Function ID: 6573
// Name: GestureDetector
// Dependencies: [21, 6573, 6575, 6576, 6578, 6610]
// Exports: GestureDetector

// Module 6572 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod6573 from "module_6573" /* 6573 */;
import ComposedGesture from "ComposedGesture" /* 6575 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 6576 */;

const jsx = Fragment.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  const obj = _mod6573;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = tmp(6610).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(6578).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
};
