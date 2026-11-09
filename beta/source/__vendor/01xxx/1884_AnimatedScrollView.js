// Module ID: 1884
// Function ID: 1885
// Name: AnimatedScrollView
// Dependencies: [19, 17, 21, 1821, 1885]
// Exports: AnimatedScrollView

// Module 1884 (AnimatedScrollView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1885 from "module_1885" /* 1885 */;
import react from "react" /* 19 */;
import NativeEventsManager from "NativeEventsManager" /* 1821 */;

const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let closure_3 = NativeEventsManager.createAnimatedComponent(ScrollView);

export function AnimatedScrollView(arg0) {
  let ref;
  let scrollViewOffset;
  ({ scrollViewOffset, ref } = arg0);
  const merged = Object.assign(arg0, Object.assign({ scrollViewOffset: 0, ref: 0 }));
  if (null === ref) {
    const obj = _mod1885;
    ref = obj.useAnimatedRef();
  }
  if (scrollViewOffset) {
    const obj2 = _mod1885;
    const scrollOffset = obj2.useScrollOffset(ref, scrollViewOffset);
  }
  if (!("scrollEventThrottle" in merged)) {
    merged.scrollEventThrottle = 1;
  }
  const merged1 = Object.assign(merged);
  return <closure_3 ref={ref} />;
}
