// Module ID: 5314
// Function ID: 5315
// Name: GestureDetector
// Dependencies: [21, 5315, 5317, 5318, 5320, 5352]
// Exports: GestureDetector

// Module 5314 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5315 from "module_5315" /* 5315 */;
import ComposedGesture from "ComposedGesture" /* 5317 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 5318 */;

const jsx = Fragment.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  const obj = _mod5315;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = tmp(5352).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5320).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
};
