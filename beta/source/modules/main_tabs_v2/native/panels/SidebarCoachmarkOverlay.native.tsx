// Module ID: 15644
// Function ID: 15645
// Name: SidebarCoachmarkOverlay
// Dependencies: [32, 19, 17, 1074, 21, 5910, 6578, 2]
// Exports: SidebarCoachmarkOverlay

// Module 15644 (SidebarCoachmarkOverlay)
import Constants from "Constants" /* 1074 */;
import reactDefault from "react" /* 5910 */;
import LayerContext from "LayerContext" /* 6578 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
function SidebarCoachmarkOverlayLayer(manager) {
  let items1;
  manager = manager.manager;
  let closure_1 = _slicedToArray(react.useState({}), 2)[1];
  const items = [manager];
  const effect = react.useEffect(() => {
    let closure_0 = manager;
    manager.invalidate = () => closure_1_1({});
    return () => {
      closure_0.invalidate = () => null;
    };
  }, items);
  let obj = {
    style: overlay.overlay,
    ref(current) {
      return manager.setSurfaceRef(current);
    },
    onLayout: NOOP,
    pointerEvents: "box-none",
    children: items1.map((children) => {
      const obj = { children: children.component };
      return closure_1_7(React.Fragment, obj, children.key);
    })
  };
  items1 = manager.items;
  return closure_7(closure_5, obj);
}
({ StyleSheet, View: hasOwnProperty } = react_native);
const NOOP = Constants.NOOP;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const context = react.createContext(null);
let obj = { overlay: obj2 };
obj2 = { zIndex: 1 };
const create = StyleSheet.create;
const merged = Object.assign(StyleSheet.absoluteFillObject);
const overlay = create(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/SidebarCoachmarkOverlay.native.tsx");

export const SidebarCoachmarkOverlayContext = context;
export const SidebarCoachmarkOverlay = function SidebarCoachmarkOverlay(enabled) {
  let items;
  enabled = enabled.enabled;
  const children = enabled.children;
  const tmp = reactDefault(() => {
    const layerContextManager = new LayerContext.LayerContextManager();
    return layerContextManager;
  });
  let tmp3 = null;
  const Provider = context.Provider;
  const tmp2 = metroImportAll;
  if (enabled) {
    tmp3 = tmp;
  }
  const obj = { value: tmp3, children: items };
  items = [children, ];
  let tmp4 = null;
  if (enabled) {
    const obj2 = { manager: tmp };
    tmp4 = metroImportDefault(SidebarCoachmarkOverlayLayer, obj2);
  }
  items[1] = tmp4;
  return tmp2(Provider, obj);
};
