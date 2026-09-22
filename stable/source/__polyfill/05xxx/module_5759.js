// Module ID: 5759
// Function ID: 5760
// Dependencies: [19, 17, 21, 1614, 5736]

// Module 5759
import _mod1614 from "module_1614" /* 1614 */;
import FrameSizeProvider from "FrameSizeProvider" /* 5736 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Dimensions, Platform, StyleSheet, View: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const size = Dimensions.get("window");
const width = size.width;
let num = 0;
if (undefined !== width) {
  num = width;
}
const height = size.height;
let num2 = 0;
if (undefined !== height) {
  num2 = height;
}
if (null == fn(1614).initialWindowMetrics) {
  let obj = { frame: null, insets: null };
  const size1 = { x: 0, y: 0, width: num, height: num2 };
  obj.frame = size1;
  obj.insets = { top: 0, left: 0, right: 0, bottom: 0 };
  let initialWindowMetrics = obj;
} else {
  initialWindowMetrics = fn(1614).initialWindowMetrics;
}
class SafeAreaProviderCompat {
  constructor(arg0) {
    ({ children, style } = global);
    closure_2 = undefined;
    closure_2 = closure_2.useContext(children(style[3]).SafeAreaInsetsContext);
    obj = {
      initialFrame: initialWindowMetrics.frame,
      render(onLayout) {
            onLayout = onLayout.onLayout;
            if (closure_2) {
              const obj2 = { ref: tmp, onLayout, style: null, children: null };
              const items = [container.container, style];
              obj2.style = items;
              obj2.children = children;
              let tmp2Result = tmp2(React3, obj2);
            } else {
              const obj = { initialMetrics: initialWindowMetrics, style, onLayout, children };
              tmp2Result = tmp2(_mod1614.SafeAreaProvider, obj);
            }
            return tmp2Result;
          }
    };
    return jsx(children(style[4]).FrameSizeProvider, obj);
  }
}
SafeAreaProviderCompat.initialMetrics = initialWindowMetrics;
const styles = StyleSheet.create({ container: { flex: 1 } });

export { SafeAreaProviderCompat };
