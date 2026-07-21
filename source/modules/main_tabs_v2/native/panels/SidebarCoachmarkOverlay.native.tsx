// Module ID: 14670
// Function ID: 110608
// Name: SidebarCoachmarkOverlayLayer
// Dependencies: []
// Exports: SidebarCoachmarkOverlay

// Module 14670 (SidebarCoachmarkOverlayLayer)
let StyleSheet;
function SidebarCoachmarkOverlayLayer(manager) {
  manager = manager.manager;
  const arg1 = manager;
  let closure_1 = callback(importAllResult.useState({}), 2)[1];
  const items = [manager];
  const effect = importAllResult.useEffect(() => function subscribeManager(manager, invalidate) {
    manager.invalidate = invalidate;
    return () => {
      arg0.invalidate = () => null;
    };
  }(manager, () => callback({})), items);
  const items1 = manager.items;
  return callback2(closure_5, {
    style: overlay.overlay,
    ref(arg0) {
      return manager.setSurfaceRef(arg0);
    },
    onLayout: NOOP,
    pointerEvents: "box-none",
    children: items1.map((children) => callback(React.Fragment, { children: children.component }, children.key))
  });
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ StyleSheet, View: closure_5 } = arg1(dependencyMap[2]));
const NOOP = arg1(dependencyMap[3]).NOOP;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const context = importAllResult.createContext(null);
let obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["zIndex"] = 1;
obj.overlay = obj;
const styles = StyleSheet.create(obj);
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/main_tabs_v2/native/panels/SidebarCoachmarkOverlay.native.tsx");

export const SidebarCoachmarkOverlayContext = context;
export const SidebarCoachmarkOverlay = function SidebarCoachmarkOverlay(enabled) {
  enabled = enabled.enabled;
  const tmp = importDefault(dependencyMap[5])(() => {
    const layerContextManager = new callback(closure_2[6]).LayerContextManager();
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
