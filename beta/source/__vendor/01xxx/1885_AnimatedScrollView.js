// Module ID: 1885
// Function ID: 1886
// Name: AnimatedScrollView
// Dependencies: [19, 17, 21, 1822, 1886]
// Exports: AnimatedScrollView

// Module 1885 (AnimatedScrollView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1886 from "module_1886" /* 1886 */;
import react from "react" /* 19 */;
import NativeEventsManager from "NativeEventsManager" /* 1822 */;

const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let closure_3 = NativeEventsManager.createAnimatedComponent(ScrollView);

export function AnimatedScrollView(arg0) {
  let ref;
  let scrollViewOffset;
  ({ scrollViewOffset, ref } = arg0);
  const merged = Object.assign(arg0, Object.assign({ scrollViewOffset: 0, ref: 0 }));
  if (null === ref) {
    const obj = _mod1886;
    ref = obj.useAnimatedRef();
  }
  if (scrollViewOffset) {
    const obj2 = _mod1886;
    const scrollOffset = obj2.useScrollOffset(ref, scrollViewOffset);
  }
  if (!("scrollEventThrottle" in merged)) {
    merged.scrollEventThrottle = 1;
  }
  const merged1 = Object.assign(merged);
  return <closure_3 ref={ref} />;
}
