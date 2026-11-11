// Module ID: 7466
// Function ID: 7467
// Dependencies: [19, 17, 21, 7467]
// Exports: MaskedView

// Module 7466
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod7467 from "module_7467" /* 7467 */;
import react from "react" /* 19 */;

const UIManager = react_native.UIManager;
const jsx = Fragment.jsx;
try {
  let closure_0 = _mod7467.default;
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
