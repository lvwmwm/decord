// Module ID: 6350
// Function ID: 6351
// Name: GestureDetector
// Dependencies: [21, 6351, 6353, 6354, 6356, 6388]
// Exports: GestureDetector

// Module 6350 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod6351 from "module_6351" /* 6351 */;
import ComposedGesture from "ComposedGesture" /* 6353 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 6354 */;

const jsx = Fragment.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  const obj = _mod6351;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = tmp(6388).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(6356).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
};
