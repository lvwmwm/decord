// Module ID: 6574
// Function ID: 6575
// Name: GestureDetector
// Dependencies: [21, 6575, 6577, 6578, 6580, 6612]
// Exports: GestureDetector

// Module 6574 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod6575 from "module_6575" /* 6575 */;
import ComposedGesture from "ComposedGesture" /* 6577 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 6578 */;

const jsx = Fragment.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  const obj = _mod6575;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = tmp(6612).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(6580).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
};
