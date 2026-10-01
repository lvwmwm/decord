// Module ID: 6090
// Function ID: 6091
// Name: GestureDetector
// Dependencies: [21, 6091, 6093, 6094, 6096, 6128]
// Exports: GestureDetector

// Module 6090 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod6091 from "module_6091" /* 6091 */;
import ComposedGesture from "ComposedGesture" /* 6093 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 6094 */;

const jsx = Fragment.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  const obj = _mod6091;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = tmp(6128).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(6096).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
};
