// Module ID: 6356
// Function ID: 6357
// Name: GestureDetector
// Dependencies: [21, 6357, 6359, 6360, 6362, 6394]
// Exports: GestureDetector

// Module 6356 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod6357 from "module_6357" /* 6357 */;
import ComposedGesture from "ComposedGesture" /* 6359 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 6360 */;

const jsx = Fragment.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  const obj = _mod6357;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = tmp(6394).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(6362).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
};
