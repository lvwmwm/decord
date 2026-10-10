// Module ID: 6351
// Function ID: 6352
// Name: GestureDetector
// Dependencies: [21, 6352, 6354, 6355, 6357, 6389]
// Exports: GestureDetector

// Module 6351 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod6352 from "module_6352" /* 6352 */;
import ComposedGesture from "ComposedGesture" /* 6354 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 6355 */;

const jsx = Fragment.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  const obj = _mod6352;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = tmp(6389).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(6357).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
};
