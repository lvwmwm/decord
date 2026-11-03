// Module ID: 5443
// Function ID: 5444
// Name: GestureDetector
// Dependencies: [21, 5444, 5446, 5447, 5449, 5481]
// Exports: GestureDetector

// Module 5443 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod5444 from "module_5444" /* 5444 */;
import ComposedGesture from "ComposedGesture" /* 5446 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 5447 */;

const jsx = Fragment.jsx;

export function GestureDetector(gesture) {
  const obj = _mod5444;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = tmp(5481).NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = tmp(5449).GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
}
