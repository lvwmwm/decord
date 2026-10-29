// Module ID: 5351
// Function ID: 5352
// Name: GestureDetector
// Dependencies: [21, 5352, 5354, 5355, 5357, 5389]
// Exports: GestureDetector

// Module 5351 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5352 from "module_5352" /* 5352 */;
import ComposedGesture from "ComposedGesture" /* 5354 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 5355 */;

const jsx = Fragment.jsx;

export function GestureDetector(gesture) {
  const obj = _mod5352;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = tmp(5389).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5357).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
}
