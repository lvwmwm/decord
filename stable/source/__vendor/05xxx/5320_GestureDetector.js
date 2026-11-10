// Module ID: 5320
// Function ID: 5321
// Name: GestureDetector
// Dependencies: [21, 5321, 5323, 5324, 5326, 5358]
// Exports: GestureDetector

// Module 5320 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5321 from "module_5321" /* 5321 */;
import ComposedGesture from "ComposedGesture" /* 5323 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 5324 */;

const jsx = Fragment.jsx;

export function GestureDetector(gesture) {
  const obj = _mod5321;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = tmp(5358).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5326).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
}
