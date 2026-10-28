// Module ID: 5346
// Function ID: 5347
// Name: GestureDetector
// Dependencies: [21, 5347, 5349, 5350, 5352, 5384]
// Exports: GestureDetector

// Module 5346 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5347 from "module_5347" /* 5347 */;
import ComposedGesture from "ComposedGesture" /* 5349 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 5350 */;

const jsx = Fragment.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  const obj = _mod5347;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = tmp(5384).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5352).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
};
