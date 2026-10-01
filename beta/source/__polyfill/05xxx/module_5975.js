// Module ID: 5975
// Function ID: 5976
// Dependencies: [19, 17, 21, 5976]
// Exports: MaskedView

// Module 5975
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod5976 from "module_5976" /* 5976 */;
import react from "react" /* 19 */;

const UIManager = react_native.UIManager;
const jsx = Fragment.jsx;
try {
  let closure_0 = _mod5976.default;
} catch (err) {
}
let closure_2 = null != UIManager.getViewManagerConfig("RNCMaskedView");

export const MaskedView = function MaskedView(children) {
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
};
