// Module ID: 7007
// Function ID: 7008
// Name: GestureHandlerRootView
// Dependencies: [19, 17, 21, 6910, 7008]
// Exports: default

// Module 7007 (GestureHandlerRootView)
import _modDef6910 from "module_6910" /* 6910 */;
import _modDef7008 from "module_7008" /* 7008 */;
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
  obj.children = jsx(_modDef7008, { style: container });
  return <tmp3 value>{null}</tmp3>;
};
