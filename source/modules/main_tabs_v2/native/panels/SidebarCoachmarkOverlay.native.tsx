// Module ID: 14796
// Function ID: 112847
// Name: SidebarCoachmarkOverlayLayer
// Dependencies: [57, 31, 27, 653, 33, 5450, 5451, 2]
// Exports: SidebarCoachmarkOverlay

// Module 14796 (SidebarCoachmarkOverlayLayer)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { NOOP } from "ME";
import jsxProd from "jsxProd";

let StyleSheet;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
function SidebarCoachmarkOverlayLayer(manager) {
  manager = manager.manager;
  let closure_1 = callback(importAllResult.useState({}), 2)[1];
  const items = [manager];
  const effect = importAllResult.useEffect(() => (function subscribeManager(manager, invalidate) {
    let closure_0 = manager;
    manager.invalidate = invalidate;
    return () => {
      closure_0.invalidate = () => null;
    };
  })(manager, () => outer1_1({})), items);
  const items1 = manager.items;
  return callback2(closure_5, {
    style: overlay.overlay,
    ref(arg0) {
      return manager.setSurfaceRef(arg0);
    },
    onLayout: NOOP,
    pointerEvents: "box-none",
    children: items1.map((children) => outer1_7(outer1_4.Fragment, { children: children.component }, children.key))
  });
}
({ StyleSheet, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const context = importAllResult.createContext(null);
let obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["zIndex"] = 1;
obj.overlay = obj;
const styles = StyleSheet.create(obj);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/panels/SidebarCoachmarkOverlay.native.tsx");

export const SidebarCoachmarkOverlayContext = context;
export const SidebarCoachmarkOverlay = function SidebarCoachmarkOverlay(enabled) {
  enabled = enabled.enabled;
  const tmp = importDefault(5450)(() => {
    const layerContextManager = new outer1_0(outer1_2[6]).LayerContextManager();
    return layerContextManager;
  });
  let obj = {};
  let tmp3 = null;
  if (enabled) {
    tmp3 = tmp;
  }
  obj.value = tmp3;
  const items = [enabled.children, ];
  let tmp4 = null;
  if (enabled) {
    obj = { manager: tmp };
    tmp4 = callback2(SidebarCoachmarkOverlayLayer, obj);
  }
  items[1] = tmp4;
  obj.children = items;
  return closure_8(context.Provider, obj);
};
