// Module ID: 5350
// Function ID: 5351
// Name: GestureDetector
// Dependencies: [21, 5351, 5353, 5354, 5356, 5388]
// Exports: GestureDetector

// Module 5350 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5351 from "module_5351" /* 5351 */;
import ComposedGesture from "ComposedGesture" /* 5353 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 5354 */;

const jsx = Fragment.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  const obj = _mod5351;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = tmp(5388).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5356).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
};
