// Module ID: 6083
// Function ID: 6084
// Name: GestureDetector
// Dependencies: [21, 6084, 6086, 6087, 6089, 6121]
// Exports: GestureDetector

// Module 6083 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod6084 from "module_6084" /* 6084 */;
import ComposedGesture from "ComposedGesture" /* 6086 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 6087 */;

const jsx = Fragment.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  const obj = _mod6084;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = tmp(6121).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(6089).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
};
