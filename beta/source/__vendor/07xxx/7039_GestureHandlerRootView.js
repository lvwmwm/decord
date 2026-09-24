// Module ID: 7039
// Function ID: 7040
// Name: GestureHandlerRootView
// Dependencies: [19, 17, 21, 6942, 7040]
// Exports: default

// Module 7039 (GestureHandlerRootView)
import _modDef6942 from "module_6942" /* 6942 */;
import _modDef7040 from "module_7040" /* 7040 */;
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
  obj.children = jsx(_modDef7040, { style: container });
  return <tmp3 value>{null}</tmp3>;
};
