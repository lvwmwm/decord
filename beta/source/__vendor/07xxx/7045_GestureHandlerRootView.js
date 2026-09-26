// Module ID: 7045
// Function ID: 7046
// Name: GestureHandlerRootView
// Dependencies: [19, 17, 21, 6948, 7046]
// Exports: default

// Module 7045 (GestureHandlerRootView)
import _modDef6948 from "module_6948" /* 6948 */;
import _modDef7046 from "module_7046" /* 7046 */;
import noop from "module_19" /* 19 */;

const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
let container = StyleSheet.create({ container: { flex: 1 } });

export default function GestureHandlerRootView(style) {
  container = style.style;
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  if (container == null) {
    container = container.container;
  }
  const obj = { value: true, children: null };
  const obj2 = { style: container };
  const merged1 = Object.assign(merged);
  obj2.moduleId = globalThis._RNGH_MODULE_ID;
  obj.children = jsx(_modDef7046, { style: container });
  return <tmp3 value>{null}</tmp3>;
};
