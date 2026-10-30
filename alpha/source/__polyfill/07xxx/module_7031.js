// Module ID: 7031
// Function ID: 7032
// Dependencies: [19, 17, 21, 7032]
// Exports: MaskedView

// Module 7031
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod7032 from "module_7032" /* 7032 */;
import react from "react" /* 19 */;

const UIManager = react_native.UIManager;
const jsx = Fragment.jsx;
try {
  let closure_0 = _mod7032.default;
} catch (err) {
}
let closure_2 = null != UIManager.getViewManagerConfig("RNCMaskedView");

export function MaskedView(children) {
  children = children.children;
  const merged = Object.assign(children, Object.assign({ children: 0 }));
  let tmp2 = children;
  if (closure_2) {
    tmp2 = children;
    if (closure_0) {
      const merged1 = Object.assign(merged);
      tmp2 = <tmp3>{children}</tmp3>;
    }
  }
  return tmp2;
}
